
import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

class CowListItem extends StatelessWidget {
  const CowListItem({super.key, required this.cow, required this.onSelect});

  final CowDto cow;
  final void Function(CowDto) onSelect;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
          vertical: 8.0,
          horizontal: 12.0
      ),
      child: Container(
          width: 100,
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
    );
  }
}
