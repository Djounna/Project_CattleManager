import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

import '../../../Shared/Dialog/Loading_Dialog.dart';
import '../../../app_context.dart';

class UpdateJobDialog extends StatefulWidget {
  const UpdateJobDialog({
    super.key,
    required this.job});

  final JobDetailsDto job;

  @override
  State<UpdateJobDialog> createState() => _UpdateJobDialogState();
}

class _UpdateJobDialogState extends State<UpdateJobDialog> {

  final _formKey = GlobalKey<FormState>();
  final List<String> _options = ['A realiser', 'Terminee', 'En cours'];
  String _level = "A realiser";

  @override void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    final appContext = Provider.of<AppContext>(context);
    final sizeX = MediaQuery.of(context).size.width;
    final sizeY = MediaQuery.of(context).size.height;

    void updateJob() async{
      showDialog(
          barrierDismissible: false,
          context: context,
          builder: (_) {
            return const LoadingDialog(text: 'Chargement');
          });

      try {

        JobDto jobToUpdate = JobDto(
          id: widget.job.id,
          title : widget.job.title,
          description : widget.job.description,
          date : widget.job.date,
          infos : widget.job.infos,
          //penId : widget.job.pen!.id,
          //cowId : widget.job.cow!.id,
          status: _level
        );

        await appContext.clientApi.jobApi!.apiJobPut(jobDto: jobToUpdate);
        ScaffoldMessenger.of(context).showSnackBar(
            SnackBar(
                content: Text("La tâche a été modifiée avec succès"),
                duration: const Duration(seconds :3)
            )
        );
        Navigator.of(context).pop();
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
        title: Text('Mettre à jour la tâche'),
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

                              DropdownButtonFormField<String>(
                                  decoration: InputDecoration(
                                      labelText: "Status"
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
                                    child: const Text('Mettre à jour'),
                                    onPressed: () async {
                                      if(_formKey.currentState!.validate()){
                                        _formKey.currentState!.save();
                                        updateJob();
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
