import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

import '../../../Shared/CMTheme.dart';

class JobListItem extends StatelessWidget {
  const JobListItem({
    super.key,
    required this.job,
    required this.onSelect
  });

  final JobDetailsDto job;
  final void Function(JobDetailsDto) onSelect;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(
          vertical: 8.0,
          horizontal: 12.0
      ),
      child: Container(
        height: 80,
        decoration: BoxDecoration(
          color: CMTheme.surfaceColor,
          border:Border.all (
            color: Colors.blueGrey,

          ),
          borderRadius: BorderRadius.circular(10),
          boxShadow: [
            BoxShadow(
              color: CMTheme.borderColor.withOpacity(0.5),
              offset: Offset(4, 4),
              blurRadius: 8,
            ),
          ],
        ),
        child: ListTile(
            leading: Icon(Icons.work),
            title: Text(job.title! + ' : ' + job.description!),
            subtitle: job.pen != null ? Text(job.pen!.name!) : job.cow != null ? Text(job.cow!.name!) : Text(''),
            trailing: _getStatusIcon(job.status),
            onTap: () =>{onSelect(job)},
        ),
      ),
    );
  }
}

  Widget _getStatusIcon(String? status) {
    switch(status) {
      case 'Terminee':
        return Icon(Icons.done, color: CMTheme.lightGreen);
      case 'En cours':
        return Icon(Icons.pending, color: Colors.orange);
      case 'A realiser':
        return Icon(Icons.circle_outlined, color: Colors.grey);
      default:
        return Icon(Icons.help_outline, color: Colors.grey);
    }
  }