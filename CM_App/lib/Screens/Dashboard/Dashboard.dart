import 'package:cm_app/Screens/Cows/CowsPage.dart';
import 'package:cm_app/Screens/Jobs/JobsPage.dart';
import 'package:flutter/material.dart';
import '../../Shared/CMTheme.dart';
import '../../Shared/DrawerContent.dart';
import '../../Shared/TopAppBar.dart';

class DashboardPage extends StatefulWidget {
  const DashboardPage({Key? key}) : super(key: key);

  @override
  State<DashboardPage> createState() => _DashboardPageState();
}

class _DashboardPageState extends State<DashboardPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: CMTheme.backgroundColor,
      appBar: TopAppBar(title:'Dashboard'),
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
              labelValues: [
                {'label': 'Total Revenue', 'value': '€12,450'},
                {'label': 'This Month', 'value': '€3,250'},
                {'label': 'Growth', 'value': '+15.2%'},
              ],
              onTap: () => _navigateToPage(context, 'Bétail'),
            ),
            const SizedBox(height: 16),
            _buildDashboardCard(
              context,
              title: 'Tâches',
              icon: Icons.list,
              color: CMTheme.primaryGreen,
              labelValues: [
                {'label': 'Pending Orders', 'value': '234'},
                {'label': 'Completed Today', 'value': '45'},
                {'label': 'Processing', 'value': '12'},
              ],
              onTap: () => _navigateToPage(context, 'Orders'),
            ),
            const SizedBox(height: 16),
            _buildDashboardCard(
              context,
              title: 'Enclos',
              icon: Icons.cabin,
              color: CMTheme.primaryGreen,
              labelValues: [
                {'label': 'Active Users', 'value': '1,248'},
                {'label': 'New This Week', 'value': '86'},
                {'label': 'Retention Rate', 'value': '89.4%'},
              ],
              onTap: () => _navigateToPage(context, 'Customers'),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDashboardCard(
      BuildContext context, {
        required String title,
        required IconData icon,
        required Color color,
        required List<Map<String, String>> labelValues,
        required VoidCallback onTap,
      }) {
    return GestureDetector(
      onTap: onTap,
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
class _DashboardPageState extends State<DashboardPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[100],

      appBar: const TopAppBar(),
      drawer: const DrawerContent(),

      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: GridView.count(
          crossAxisCount: 2,
          crossAxisSpacing: 16,
          mainAxisSpacing: 16,
          childAspectRatio: 1.1,
          children: [
            _buildDashboardCard(
              context,
              title: 'Betail',
              subtitle: '€12,450',
              description: 'This month',
              icon: Icons.task,
              color: Colors.green,
              onTap: () => _navigateToPage(context, 'Bétail'),
            ),
            _buildDashboardCard(
              context,
              title: 'Enclos',
              subtitle: '234',
              description: 'Pending orders',
              icon: Icons.task,
              color: Colors.orange,
              onTap: () => _navigateToPage(context, 'Enclos'),
            ),
            _buildDashboardCard(
              context,
              title: 'Tâches',
              subtitle: '1,248',
              description: 'Active users',
              icon: Icons.task,
              color: Colors.blue,
              onTap: () => _navigateToPage(context, 'Tâches'),
            ),
            _buildDashboardCard(
              context,
              title: 'Traite',
              subtitle: '156',
              description: 'In stock',
              icon: Icons.task,
              color: Colors.purple,
              onTap: () => _navigateToPage(context, 'Traite'),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildDashboardCard2(
      BuildContext context, {
        required String title,
        required String subtitle,
        required String description,
        required IconData icon,
        required Color color,
        required VoidCallback onTap,
      }) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          boxShadow: [
            BoxShadow(
              color: Colors.grey.withOpacity(0.1),
              spreadRadius: 1,
              blurRadius: 6,
              offset: const Offset(0, 3),
            ),
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.all(20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.start,
                spacing: 20,
                children: [
                  Container(
                    padding: const EdgeInsets.all(12),
                    decoration: BoxDecoration(
                      color: color.withOpacity(0.1),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: Icon(
                      icon,
                      color: color,
                      size: 24,
                    ),
                  ),
                  Text(
                    title,
                    style: TextStyle(
                      fontSize: 14,
                      fontWeight: FontWeight.w500,
                      color: Colors.grey[600],
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 12),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const SizedBox(height: 4),
                  Text(
                    subtitle,
                    style: const TextStyle(
                      fontSize: 20,
                      fontWeight: FontWeight.bold,
                      color: Colors.black87,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    description,
                    style: TextStyle(
                      fontSize: 12,
                      color: Colors.grey[500],
                    ),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }

 */

  void _navigateToPage(BuildContext context, String pageName) {
    // Replace this with your actual navigation logic
    // Example: Navigator.pushNamed(context, '/sales');

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