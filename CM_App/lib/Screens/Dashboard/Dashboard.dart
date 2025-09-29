import 'package:CM_api/api.dart';
import 'package:cm_app/Screens/Cows/CowsPage.dart';
import 'package:cm_app/Screens/Jobs/JobsPage.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../Shared/CMTheme.dart';
import '../../Shared/DrawerContent.dart';
import '../../Shared/TopAppBar.dart';
import '../../app_context.dart';

class DashboardPage extends StatefulWidget {
  const DashboardPage({Key? key}) : super(key: key);

  @override
  State<DashboardPage> createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> {
  List<CowDto>? _cows;
  List<Map<String, String>>? _cowLabelValues;
  List<PenDto>? _pens;
  List<Map<String, String>>? _penLabelValues;
  List<GroupDto>? _groups;
  List<JobDetailsDto>? _workerJobs;
  List<Map<String, String>>? _jobLabelValues;

  @override
  Widget build(BuildContext context) {
    final appContext = Provider.of<AppContext>(context);

    if (appContext.getCows() != null && appContext.getPens() != null && appContext.getGroups() != null) {
      _cows = appContext.getCows();
      _pens = appContext.getPens();
      _groups = appContext.getGroups();
      _cowLabelValues = [
        {'label': 'Nombre', 'value': _cows?.length.toString() ?? ''},
        {'label': 'Enclos', 'value': _pens?.length.toString() ?? ''},
        {'label': 'Groupes', 'value': _groups?.length.toString() ?? ''},
      ];
    }

    if (appContext.getWorkerJobs() != null) {
      _workerJobs = appContext.getWorkerJobs();
      _jobLabelValues = [
        {'label': 'A réaliser : ',
          'value': _workerJobs != null ?
          _workerJobs!.where((job) => job.status == 'A realiser').length.toString()
              : '0'},
        {'label': 'Terminées : ',
          'value': _workerJobs != null ?
          _workerJobs!.where((job) => job.status == 'Terminee').length.toString()
              : '0'},
        {'label': 'Tâche en cours :',
          'value': _workerJobs != null && _workerJobs!.isNotEmpty  && _workerJobs!.where((job) => job.status == 'En cours').isNotEmpty ?
          _workerJobs!.where((job) => job.status == 'En cours').first.title ?? ''
              : 'Aucune'},
      ];
    }

    if (appContext.getPens() != null) {
      _pens = appContext.getPens();
      _penLabelValues = _pens?.map((pen) => {
        'label': '${pen.name ?? "Enclos"} : ',
        'value': '${pen.size ?? 0} vaches',
      }).toList() ?? [];
    }

    return Scaffold(
      backgroundColor: CMTheme.backgroundColor,
      appBar: TopAppBar(title: 'Dashboard'),
      drawer: const DrawerContent(),

      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            _buildDashboardCard(
              context,
              title: 'Bétail',
              icon: Icons.list,
              color: CMTheme.primaryGreen,
              labelValues: _cowLabelValues ?? []
              //onTap: () => _navigateToPage(context, 'Bétail'),
            ),
            const SizedBox(height: 16),
            _buildDashboardCard(
              context,
              title: 'Tâches',
              icon: Icons.list,
              color: CMTheme.primaryGreen,
              labelValues: _jobLabelValues ?? []
              //onTap: () => _navigateToPage(context, 'Orders'),
            ),
            const SizedBox(height: 16),
            _buildDashboardCard(
              context,
              title: 'Enclos',
              icon: Icons.cabin,
              color: CMTheme.primaryGreen,
              labelValues: _penLabelValues ?? []
              //onTap: () => _navigateToPage(context, 'Customers'),
            ),
          ],
        ),
      ),
    );
  }
}

  Widget _buildDashboardCard(
      BuildContext context, {
        required String title,
        required IconData icon,
        required Color color,
        required List<Map<String, String>> labelValues,
        //required VoidCallback onTap,
      }) {
    return GestureDetector(
      //onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: CMTheme.lightGreen.withOpacity(0.1),
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: CMTheme.borderColor.withOpacity(0.1),
              spreadRadius: 1,
              blurRadius: 6,
              offset: const Offset(0, 3),
            ),
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Row(
            children: [
              // Left side - Icon (1/3)
              Expanded(
                flex: 1,
                child: Container(
                  padding: const EdgeInsets.all(16),
                  /*decoration: BoxDecoration(
                    color: color.withOpacity(0.1),
                    borderRadius: BorderRadius.circular(12),
                  ),*/
                  child: Icon(
                    icon,
                    color: color,
                    size: 32,
                  ),
                ),
              ),
              //const SizedBox(width: 16),
              // Right side - Title and label/values (2/3)
              Expanded(
                flex: 2,
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    // Title
                    Text(
                      title,
                      style: const TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: CMTheme.textPrimary,
                      ),
                    ),
                    const SizedBox(height: 8),
                    // Label/Value pairs
                    ...labelValues.map((item) => Padding(
                      padding: const EdgeInsets.only(bottom: 4),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            item['label'] ?? '',
                            style: TextStyle(
                              fontSize: 12,
                              color: CMTheme.textSecondary,
                            ),
                          ),
                          Text(
                            item['value'] ?? '',
                            style: const TextStyle(
                              fontSize: 12,
                              fontWeight: FontWeight.w600,
                              color: CMTheme.textSecondary,
                            ),
                          ),
                        ],
                      ),
                    )).toList(),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  /*
  void _navigateToPage(BuildContext context, String pageName) {
     ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(
        content: Text('Navigation vers la page $pageName'),
        duration: const Duration(seconds: 1),
        backgroundColor: Colors.blue[700],
      ),
    );
    switch (pageName.toLowerCase()) {
      case 'Bétail':
        Navigator.push(context, MaterialPageRoute(builder: (context) => CowsPage()));
        break;
      //case 'Enclos':
        //Navigator.push(context, MaterialPageRoute(builder: (context) => ()));
        //break;
      case 'Tâches':
        Navigator.push(context, MaterialPageRoute(builder: (context) => JobsPage()));
        break;
      //case 'Traite':
       // Navigator.push(context, MaterialPageRoute(builder: (context) => ProductsPage()));
        // break;
    }
  }
}
*/
