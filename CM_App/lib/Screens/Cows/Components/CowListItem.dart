
import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

class CowListItem extends StatelessWidget {
  const CowListItem({super.key,
    required this.cow,
    required this.onSelect,
    required this.createAlert,
  });

  final CowDto cow;
  final void Function(CowDto) onSelect;
  final void Function(CowDto) createAlert;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
          vertical: 8.0,
          horizontal: 12.0
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          // Details container
          Expanded(
            flex: 4,
            child: Padding(
              padding: const EdgeInsets.only(right: 12.0),
              child: Container(
                  height: 80,
                  decoration: BoxDecoration(
                    color: Colors.white,
                    border:Border.all (
                      color: Colors.blueGrey,

                    ),
                    borderRadius: BorderRadius.circular(10),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.grey.withOpacity(0.5),
                        offset: Offset(4, 4),
                        blurRadius: 8,
                      ),
                    ],
                  ),
                  child: ListTile(
                      leading: Icon(Icons.info),
                      title: Text(cow.identifier!),
                      subtitle: Text(cow.name!),
                      onTap: () => {onSelect(cow)}
                  )
              ),
            ),
          ),

          // Alert button container
          Expanded(
            flex: 1,
              child: ElevatedButton(
                  onPressed: () => createAlert(cow),
                  style: ElevatedButton.styleFrom(
                    minimumSize: Size(double.infinity, 80),
                    backgroundColor: Colors.white,
                    foregroundColor: Colors.orangeAccent,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(10)
                    )
                  ),
                  child: const Icon(Icons.alarm)
              )
          )
        ],
      ),
    );
  }
}
