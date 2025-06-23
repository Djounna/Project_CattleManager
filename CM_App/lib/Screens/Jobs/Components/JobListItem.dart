import 'package:CM_api/api.dart';
import 'package:flutter/material.dart';

class JobListItem extends StatelessWidget {
  const JobListItem({super.key, required this.job});

  final JobDetailsDto job;
  //final void Function(JobDto) onSelect;

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
            leading: Icon(Icons.work),
            title: Text(job.title!),
            subtitle: Text(job.description!),
        ),
      ),
    );
  }
}
