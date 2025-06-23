import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../../Shared/Dialog/Loading_Dialog.dart';
import '../../../app_context.dart';

class CreateCowAlertDialog extends StatefulWidget {
  const CreateCowAlertDialog({super.key, required this.cow});

  final CowDto cow;

  @override
  State<CreateCowAlertDialog> createState() => _CreateCowAlertDialogState();
}

class _CreateCowAlertDialogState extends State<CreateCowAlertDialog> {

  final _formKey = GlobalKey<FormState>();
  final List<String> _options = ['Haut', 'Moyen', 'Bas'];
  String? _title = "";
  String? _description = "";
  String _level = "";
  final TextEditingController _titleController = TextEditingController();
  final TextEditingController _descriptionController = TextEditingController();

  @override void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final appContext = Provider.of<AppContext>(context);
    final sizeX = MediaQuery.of(context).size.width;
    final sizeY = MediaQuery.of(context).size.height;

    void AddCowAlert() async{
      showDialog(
          barrierDismissible: false,
          context: context,
          builder: (_) {
            return const LoadingDialog(text: 'Chargement');
          });

      try {
        AlertDto newAlert = AlertDto(
          id: 0,
          cowId : widget.cow.id,
          title : _title,
          description: _description,
          level: _level,
        );

          appContext.clientApi.alertApi!.apiAlertPost(alertDto: newAlert);
          Navigator.of(context).pop();
          ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(
                  content: Text("L'alerte a été ajoutée avec succès"),
                  duration: const Duration(seconds :3)
              )
          );
          Navigator.of(context).pop();
      }
      catch(e){
        Navigator.of(context).pop();
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
                content: Text(e.toString()),
                duration: const Duration(seconds :3)
            )
        );
      }
    }

    return SimpleDialog(
        title: Text('Créer une alarme pour  ${widget.cow.name}'),
        children: [
          SizedBox(
              height: sizeY/3,
              width: sizeX/2,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Expanded(
                    child: Padding(
                      padding: const EdgeInsets.all(12.0),
                      child: Form(
                        key: _formKey,
                        child: Column(
                          children: [

                            TextFormField(
                              controller: _titleController,
                              decoration: InputDecoration (
                                labelText: 'Titre'
                              ),
                              validator: (value){
                                if(value == null || value.isEmpty){
                                  return 'Ce champ ne peut pas être vide';
                                }
                                return null;
                              },
                            ),

                            TextFormField(
                              controller: _descriptionController,
                              decoration: InputDecoration (
                                  labelText: 'Description'
                              ),
                              validator: (value){
                                if(value == null || value.isEmpty){
                                  return 'Ce champ ne peut pas être vide';
                                }
                                return null;
                              },
                            ),

                            DropdownButtonFormField<String>(
                              decoration: InputDecoration(
                                labelText: "Niveau d'alerete"
                              ),
                                value: _level,
                                items: _options
                                    .map((option) => DropdownMenuItem(
                                    value: option,
                                    child: Text(option)
                                ))
                                    .toList(),
                                onChanged: (value){
                                  setState((){
                                    _level = value!;
                                  });
                                },
                                validator: (value ){
                                  if(value == null || value.isEmpty){
                                    return 'Ce champ ne peut pas être vide';
                                  }
                                  return null;
                                }
                            ),
                            Padding(
                              padding: const EdgeInsets.all(16.0),
                              child: ElevatedButton(
                                child: const Text('Ajouter'),
                                onPressed: () async {
                                  if(_formKey.currentState!.validate()){
                                    _formKey.currentState!.save();
                                    AddCowAlert();
                                  }
                                },
                              )
                            )
                          ],
                        )
                      ),
                    ),
                  ),
                ],
              )
          )
        ]
    );
  }
}
