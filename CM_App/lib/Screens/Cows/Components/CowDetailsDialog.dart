
import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

class CowDetailsDialog extends StatelessWidget {
  const CowDetailsDialog({super.key, required this.cowDetails});

  final CowDetailsDto? cowDetails;

  @override
  Widget build(BuildContext context) {
    final sizeX = MediaQuery.of(context).size.width;
    final sizeY = MediaQuery.of(context).size.height;

    return SimpleDialog(
        title: Text('Nom : ${cowDetails!.identifier}'),
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
                    child: ListView(
                        children:[
                          Text('Identifiant : ${cowDetails!.identifier}'),
                          Divider(),
                          Text('Naissance : ${cowDetails!.birthDate}'),
                          Text('Race : ${cowDetails!.race}'),
                          Divider(),
                          cowDetails!.group != null ? Text('Groupe : ${cowDetails!.group!.name}') : Container(),
                          cowDetails!.pen != null ? Text('Enclos : ${cowDetails!.pen!.name}') : Container()

                        ]
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
