
import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

class CowListItem extends StatelessWidget {
  const CowListItem({super.key, required this.cow, required this.onSelect});

  final CowDto cow;
  final void Function(CowDto) onSelect;

  @override
  Widget build(BuildContext context) {
    return ListTile(
      leading: Icon(Icons.info),
      title: Text(cow.identifier!),
      subtitle: Text(cow.name!),
      onTap:() => {onSelect(cow)}
    );
  }
}
