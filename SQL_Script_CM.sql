USE [master]
GO
/****** Object:  Database [CattleManager]    Script Date: 14/06/2025 07:13:42 ******/
CREATE DATABASE [CattleManager]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'CattleManager', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CattleManager.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'CattleManager_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\CattleManager_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [CattleManager] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [CattleManager].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [CattleManager] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [CattleManager] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [CattleManager] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [CattleManager] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [CattleManager] SET ARITHABORT OFF 
GO
ALTER DATABASE [CattleManager] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [CattleManager] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [CattleManager] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [CattleManager] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [CattleManager] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [CattleManager] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [CattleManager] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [CattleManager] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [CattleManager] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [CattleManager] SET  ENABLE_BROKER 
GO
ALTER DATABASE [CattleManager] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [CattleManager] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [CattleManager] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [CattleManager] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [CattleManager] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [CattleManager] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [CattleManager] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [CattleManager] SET RECOVERY FULL 
GO
ALTER DATABASE [CattleManager] SET  MULTI_USER 
GO
ALTER DATABASE [CattleManager] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [CattleManager] SET DB_CHAINING OFF 
GO
ALTER DATABASE [CattleManager] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [CattleManager] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [CattleManager] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [CattleManager] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'CattleManager', N'ON'
GO
ALTER DATABASE [CattleManager] SET QUERY_STORE = OFF
GO
USE [CattleManager]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Alerts]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Alerts](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[CowId] [int] NULL,
	[PenId] [int] NULL,
	[Level] [nvarchar](max) NOT NULL,
	[Infos] [nvarchar](max) NULL,
	[Done] [bit] NOT NULL,
 CONSTRAINT [PK_Alerts] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Conditions]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Conditions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CowId] [int] NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Type] [nvarchar](max) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[Comment] [nvarchar](max) NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NULL,
 CONSTRAINT [PK_Conditions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Cows]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cows](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Identifier] [nvarchar](max) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[BirthDate] [date] NOT NULL,
	[Race] [nvarchar](max) NOT NULL,
	[Gender] [nvarchar](max) NOT NULL,
	[PenId] [int] NULL,
	[GroupId] [int] NULL,
	[MilkCow] [bit] NOT NULL,
	[ImgLink] [nvarchar](max) NULL,
	[FatherId] [int] NULL,
	[MotherId] [int] NULL,
 CONSTRAINT [PK_Cows] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Gestations]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Gestations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CowId] [int] NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[StartDate] [date] NOT NULL,
	[CalvingDate] [date] NULL,
 CONSTRAINT [PK_Gestations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[GroupMoves]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GroupMoves](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CowId] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[SourceGroupId] [int] NULL,
	[DestinationGroupId] [int] NOT NULL,
 CONSTRAINT [PK_GroupMoves] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Groups]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Groups](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NULL,
	[ImgLink] [nvarchar](max) NULL,
 CONSTRAINT [PK_Groups] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Intervenants]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Intervenants](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Type] [nvarchar](max) NOT NULL,
	[Coordinates] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Intervenants] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Interventions]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Interventions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CowId] [int] NOT NULL,
	[IntervenantId] [int] NULL,
	[Date] [date] NULL,
	[Description] [nvarchar](max) NULL,
	[Type] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Interventions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Jobs]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Jobs](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Status] [nvarchar](max) NOT NULL,
	[PenId] [int] NULL,
	[CowId] [int] NULL,
	[Infos] [nvarchar](max) NULL,
	[Date] [date] NOT NULL,
 CONSTRAINT [PK_Jobs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Milkings]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Milkings](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CowId] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[Volume] [float] NOT NULL,
	[Cancelled] [bit] NOT NULL,
 CONSTRAINT [PK_Milkings] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MilkProductions]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MilkProductions](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CowId] [int] NOT NULL,
	[WeeklyProduction] [float] NOT NULL,
	[MonthlyProduction] [float] NOT NULL,
	[LifetimeAverage] [float] NOT NULL,
	[TotalQuantity] [float] NOT NULL,
	[TotalDays] [float] NOT NULL,
 CONSTRAINT [PK_MilkProductions] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PenMoves]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PenMoves](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CowId] [int] NOT NULL,
	[Date] [date] NOT NULL,
	[SourcePenId] [int] NULL,
	[DestinationPenId] [int] NOT NULL,
 CONSTRAINT [PK_PenMoves] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Pens]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Pens](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Size] [int] NOT NULL,
	[Coordinates] [nvarchar](max) NULL,
 CONSTRAINT [PK_Pens] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Roles]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Roles](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
 CONSTRAINT [PK_Roles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Stocks]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Stocks](
	[Id] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Stocks] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Treatments]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Treatments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ConditionId] [int] NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Type] [nvarchar](max) NOT NULL,
	[Date] [date] NOT NULL,
	[CowId] [int] NOT NULL,
 CONSTRAINT [PK_Treatments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Username] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[IdAuth] [nvarchar](max) NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Vaccinations]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Vaccinations](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Date] [date] NOT NULL,
	[CowId] [int] NOT NULL,
 CONSTRAINT [PK_Vaccinations] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[WorkerJobs]    Script Date: 14/06/2025 07:13:42 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[WorkerJobs](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [int] NOT NULL,
	[JobId] [int] NOT NULL,
 CONSTRAINT [PK_WorkerJobs] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231230165358_InitialMigration', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20231231133203_AddedPropertiesToGroupEntity', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240117205500_UpdateAlertAndIntervention', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240120190835_UdpateJobEntities', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240125221640_UpdateCowEntity', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240128093552_UpdateJobTables', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240228211728_UpdatedMilkingsTable', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20240229192944_AddedMilkCowFieldToCow', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250101145756_AddedPenAndGroupMovesTables', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250105164401_AddedImglinkPropertyToCow', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250113212944_AddedVaccinationTable', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250114192356_AddedCoordinatesField', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250202153647_AddedInfosTojob', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250225195357_AddedConditionAndTreatmentTables', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250302174241_AddedCancelledStatusToMilking', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250409071146_RemovedRecurringJobs', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250409120616_RemovedLengthFromJobs', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250518154910_AddedCowFKToTreatment', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250525175223_UpdatedInterventionEntity', N'8.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20250601190458_AddedStatusToAlert', N'8.0.0')
GO
SET IDENTITY_INSERT [dbo].[Alerts] ON 

INSERT [dbo].[Alerts] ([Id], [Title], [Description], [CowId], [PenId], [Level], [Infos], [Done]) VALUES (1018, N'test alerte', N'test test test', NULL, 3, N'Moyen', NULL, 0)
SET IDENTITY_INSERT [dbo].[Alerts] OFF
GO
SET IDENTITY_INSERT [dbo].[Conditions] ON 

INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (1, 2, N'Blessure pate gauche', N'Boitage', N'Actif', NULL, CAST(N'2025-05-18' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (2, 2, N'Douleur musculaire', N'Articluation', N'Actif', NULL, CAST(N'2025-05-26' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (3, 2, N'Peau sèche', N'Peau', N'Soigné', NULL, CAST(N'2025-05-26' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (4, 2, N'Ragged hollow', N'wtf', N'done', NULL, CAST(N'2025-05-31' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (5, 5, N'Rash', N'Skin', N'Ongoing', NULL, CAST(N'2025-05-28' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (6, 5, N'test', N'test', N'test', NULL, CAST(N'2025-05-31' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (9, 2, N'abababa', N'testest', N'aaa', NULL, CAST(N'2025-05-31' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (1007, 2, N'Egratinure', N'Blessure', N'Soigné', NULL, CAST(N'2025-06-08' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (1010, 5, N'pate gauche', N'Blessure', N'En cours', NULL, CAST(N'2025-06-09' AS Date), NULL)
INSERT [dbo].[Conditions] ([Id], [CowId], [Name], [Type], [Status], [Comment], [StartDate], [EndDate]) VALUES (1011, 8, N'Rhume', N'Maladie', N'En cours', NULL, CAST(N'2025-06-14' AS Date), NULL)
SET IDENTITY_INSERT [dbo].[Conditions] OFF
GO
SET IDENTITY_INSERT [dbo].[Cows] ON 

INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (2, N'aaa-111', N'Anna', CAST(N'2013-03-12' AS Date), N'BelgianBlue', N'F', 4, 2, 1, N'Calf_Holstein_RedAndWhite.jpg', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (3, N'bbb-222', N'Berta', CAST(N'2014-04-13' AS Date), N'Holstein', N'F', 3, 6, 1, N'Calf_Holstein_RedAndWhite.jpg', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (4, N'ccc-333', N'Charlina', CAST(N'2015-05-14' AS Date), N'Holstein', N'F', 4, 4, 1, N'Calf_Holstein_RedAndWhite.jpg', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (5, N'ddd-444', N'Margarita', CAST(N'2019-08-09' AS Date), N'Normande', N'F', 4, 5, 1, N'Calf_Holstein_RedAndWhite.jpg', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (6, N'eee-555', N'Juanita', CAST(N'2022-09-11' AS Date), N'Normande', N'F', 4, 4, 1, N'Calf_Holstein_RedAndWhite.jpg', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (8, N'ggg-444', N'Moana', CAST(N'2024-01-05' AS Date), N'Normande', N'F', 3, 6, 1, N'Calf_Holstein_RedAndWhite.jpg', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (9, N'xyz-897', N'Jaja', CAST(N'2023-01-22' AS Date), N'Holstein', N'F', 3, 2, 0, N'Calf_Holstein_RedAndWhite.jpg', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (10, N'ttt-444', N'Tatiana', CAST(N'2024-01-10' AS Date), N'Holstein', N'F', 4, 2, 0, N'Calf_Holstein_RedAndWhite.jpg', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (11, N'jkl-GBN', N'Veleda', CAST(N'2020-02-25' AS Date), N'Holstein', N'F', 4, 2, 0, N'', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (12, N'yyy-888', N'Samalia', CAST(N'2025-06-08' AS Date), N'Holstein', N'F', 4, 2, 1, N'', NULL, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (15, N'zzz-zzz', N'Zaza', CAST(N'2025-06-07' AS Date), N'Holstein', N'F', 3, 2, 0, N'', 4, NULL)
INSERT [dbo].[Cows] ([Id], [Identifier], [Name], [BirthDate], [Race], [Gender], [PenId], [GroupId], [MilkCow], [ImgLink], [FatherId], [MotherId]) VALUES (16, N'lah-234', N'Elric', CAST(N'2025-06-14' AS Date), N'Holstein', N'M', 2, 1, 0, N'', 2, NULL)
SET IDENTITY_INSERT [dbo].[Cows] OFF
GO
SET IDENTITY_INSERT [dbo].[Gestations] ON 

INSERT [dbo].[Gestations] ([Id], [CowId], [Status], [StartDate], [CalvingDate]) VALUES (3, 4, N'En cours', CAST(N'2024-06-05' AS Date), CAST(N'2025-03-05' AS Date))
INSERT [dbo].[Gestations] ([Id], [CowId], [Status], [StartDate], [CalvingDate]) VALUES (7, 5, N'En cours', CAST(N'2025-05-31' AS Date), CAST(N'2026-03-03' AS Date))
SET IDENTITY_INSERT [dbo].[Gestations] OFF
GO
SET IDENTITY_INSERT [dbo].[GroupMoves] ON 

INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (1, 4, CAST(N'0001-01-01' AS Date), 2, 6)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (2, 2, CAST(N'0001-01-01' AS Date), 1, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (3, 4, CAST(N'0001-01-01' AS Date), 1, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (4, 4, CAST(N'0001-01-01' AS Date), 2, 1)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (5, 3, CAST(N'0001-01-01' AS Date), 1, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (6, 6, CAST(N'2025-01-04' AS Date), 1, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (7, 3, CAST(N'2025-01-04' AS Date), 2, 1)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (8, 6, CAST(N'2025-01-04' AS Date), 4, 1)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (9, 2, CAST(N'2025-01-06' AS Date), 5, 1)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (10, 3, CAST(N'2025-01-12' AS Date), 5, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (11, 4, CAST(N'2025-01-13' AS Date), 3, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (12, 3, CAST(N'2025-01-25' AS Date), 5, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (13, 4, CAST(N'2025-01-25' AS Date), 3, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (14, 3, CAST(N'2025-02-13' AS Date), 3, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (15, 5, CAST(N'2025-02-13' AS Date), 3, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (16, 5, CAST(N'2025-05-18' AS Date), 1, 3)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (17, 3, CAST(N'2025-05-18' AS Date), 1, 3)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (18, 2, CAST(N'2025-05-29' AS Date), 5, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (19, 2, CAST(N'2025-05-29' AS Date), 2, 5)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (20, 2, CAST(N'2025-05-29' AS Date), 5, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (21, 2, CAST(N'2025-05-29' AS Date), 2, 3)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (22, 2, CAST(N'2025-05-31' AS Date), 3, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (23, 6, CAST(N'2025-05-31' AS Date), 4, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (24, 6, CAST(N'2025-06-01' AS Date), 2, 3)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (1023, 2, CAST(N'2025-06-08' AS Date), 5, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (1024, 6, CAST(N'2025-06-08' AS Date), 4, 3)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (1025, 4, CAST(N'2025-06-08' AS Date), 4, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (1026, 3, CAST(N'2025-06-08' AS Date), 6, 1)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (1027, 15, CAST(N'2025-06-09' AS Date), NULL, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (1028, 2, CAST(N'2025-06-09' AS Date), 5, 2)
INSERT [dbo].[GroupMoves] ([Id], [CowId], [Date], [SourceGroupId], [DestinationGroupId]) VALUES (1029, 5, CAST(N'2025-06-09' AS Date), 1, 5)
SET IDENTITY_INSERT [dbo].[GroupMoves] OFF
GO
SET IDENTITY_INSERT [dbo].[Groups] ON 

INSERT [dbo].[Groups] ([Id], [Name], [Description], [ImgLink]) VALUES (1, N'Jeunes taureaux', N'- 2ans', N'bull_icon.jpg')
INSERT [dbo].[Groups] ([Id], [Name], [Description], [ImgLink]) VALUES (2, N'Vaches laitières', N'Actuellement en traite', N'cow_milk_icon.webp')
INSERT [dbo].[Groups] ([Id], [Name], [Description], [ImgLink]) VALUES (3, N'Veaux', N'0-6m', N'calf_icon.jpg')
INSERT [dbo].[Groups] ([Id], [Name], [Description], [ImgLink]) VALUES (4, N'Taureaux reproduction', N'3Y+', N'bull_icon.jpg')
INSERT [dbo].[Groups] ([Id], [Name], [Description], [ImgLink]) VALUES (5, N'Génisses', N'1Y-2Y', N'')
INSERT [dbo].[Groups] ([Id], [Name], [Description], [ImgLink]) VALUES (6, N'Temporaire', N'En attente d''assignation', N'')
INSERT [dbo].[Groups] ([Id], [Name], [Description], [ImgLink]) VALUES (7, N'Normandes', N'Normandes', N'cow_icon.webp')
INSERT [dbo].[Groups] ([Id], [Name], [Description], [ImgLink]) VALUES (8, N'Groupe test', N'test', N'')
SET IDENTITY_INSERT [dbo].[Groups] OFF
GO
SET IDENTITY_INSERT [dbo].[Interventions] ON 

INSERT [dbo].[Interventions] ([Id], [CowId], [IntervenantId], [Date], [Description], [Type]) VALUES (4, 2, NULL, CAST(N'2025-05-26' AS Date), N'Taureau : Marcus du bas', N'Insémination')
INSERT [dbo].[Interventions] ([Id], [CowId], [IntervenantId], [Date], [Description], [Type]) VALUES (5, 2, NULL, CAST(N'2025-05-29' AS Date), N'Taureau : Marcus du pré', N'Insémination')
INSERT [dbo].[Interventions] ([Id], [CowId], [IntervenantId], [Date], [Description], [Type]) VALUES (6, 2, NULL, CAST(N'2025-05-29' AS Date), N'Contrôle blessure pate gauche', N'Vétérinaire')
INSERT [dbo].[Interventions] ([Id], [CowId], [IntervenantId], [Date], [Description], [Type]) VALUES (7, 2, NULL, CAST(N'2025-05-29' AS Date), N'ok', N'Vétérinaire')
INSERT [dbo].[Interventions] ([Id], [CowId], [IntervenantId], [Date], [Description], [Type]) VALUES (10, 8, NULL, CAST(N'2025-06-09' AS Date), N'Insémination', N'Veterinaire')
INSERT [dbo].[Interventions] ([Id], [CowId], [IntervenantId], [Date], [Description], [Type]) VALUES (11, 12, NULL, CAST(N'2025-06-14' AS Date), N'Par vétérinaire ', N'Vaccination')
SET IDENTITY_INSERT [dbo].[Interventions] OFF
GO
SET IDENTITY_INSERT [dbo].[Jobs] ON 

INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (1, N'string', N'string', N'Terminee', NULL, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (2, N'test', N'test', N'En cours', NULL, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (3, N'Nettoyage Etable', N'Nettoyage complet', N'A realiser', NULL, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (4, N'', N'', N'A realiser', NULL, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (5, N'Nettoyer les abreuvoirs', N'Vérification + Nettoyage', N'A realiser', NULL, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (6, N'Réparation cloture', N'Prendre matériel nécessaire - Couper le courant', N'A realiser', NULL, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (7, N'Nourrir', N'Tourteaux + Granules', N'A realiser', 3, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (8, N'Traite', N'Traite', N'A realiser', 2, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (9, N'Ramener Georgette à l''étable', N'Pour vélage à venir', N'A realiser', 4, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (10, N'Ranger matériel aterlier', N'+ inventaire', N'A realiser', NULL, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (11, N'testtest', N'tes', N'A realiser', NULL, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (12, N'Vérifier sabot droit', N'encoder note', N'A realiser', NULL, 3, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (13, N'Déplacer animal', N'Vers Prairie gauche', N'A realiser', 3, 4, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (14, N'Se présenter', N'Rutabaga doit se présenter devant ses collègues', N'A realiser', 2, NULL, NULL, CAST(N'2025-04-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (15, N'Nettoyage Cours centrale', N'A l''eau', N'A realiser', NULL, NULL, NULL, CAST(N'2025-05-20' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (16, N'Nettoyage bétaillère', N'Encore à faire! vite !! ', N'A realiser', NULL, NULL, NULL, CAST(N'2025-05-23' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (17, N'Nettoyage etable', N'test', N'A realiser', 2, NULL, NULL, CAST(N'2025-06-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (18, N'Nourrir Etable', N'Grains de tourteaux', N'A realiser', 2, NULL, NULL, CAST(N'2025-06-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (19, N'Assister vétérinaire', N'Noter soins', N'A realiser', NULL, 3, NULL, CAST(N'2025-06-09' AS Date))
INSERT [dbo].[Jobs] ([Id], [Title], [Description], [Status], [PenId], [CowId], [Infos], [Date]) VALUES (20, N'Abreuver vaches étable', N'Au moins 4l par animal', N'En cours', NULL, NULL, NULL, CAST(N'2025-06-12' AS Date))
SET IDENTITY_INSERT [dbo].[Jobs] OFF
GO
SET IDENTITY_INSERT [dbo].[Milkings] ON 

INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1, 2, CAST(N'2024-03-05' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2, 3, CAST(N'2024-03-05' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3, 4, CAST(N'2024-03-05' AS Date), 11, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (4, 2, CAST(N'2024-03-03' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (5, 3, CAST(N'2024-03-03' AS Date), 8, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (6, 4, CAST(N'2024-03-03' AS Date), 9, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (7, 2, CAST(N'2024-03-09' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (8, 3, CAST(N'2024-03-09' AS Date), 7, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (9, 4, CAST(N'2024-03-09' AS Date), 4, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (10, 3, CAST(N'2024-03-07' AS Date), 8, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (11, 3, CAST(N'2024-03-06' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (12, 4, CAST(N'2024-03-06' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (13, 2, CAST(N'2024-03-12' AS Date), 4, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (14, 3, CAST(N'2024-03-12' AS Date), 8, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (15, 2, CAST(N'2024-03-11' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (16, 3, CAST(N'2024-03-11' AS Date), 2, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (17, 4, CAST(N'2024-03-11' AS Date), 13, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (18, 2, CAST(N'2024-03-10' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (19, 3, CAST(N'2024-03-10' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (20, 2, CAST(N'2024-03-01' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (21, 3, CAST(N'2024-03-01' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (22, 4, CAST(N'2024-03-01' AS Date), 19, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (23, 2, CAST(N'2024-03-02' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (24, 3, CAST(N'2024-03-02' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (25, 4, CAST(N'2024-03-02' AS Date), 7, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (26, 2, CAST(N'2024-03-08' AS Date), 3, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (27, 3, CAST(N'2024-03-08' AS Date), 28, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (28, 2, CAST(N'2024-03-13' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (29, 3, CAST(N'2024-03-13' AS Date), 6, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (30, 4, CAST(N'2024-03-13' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (31, 2, CAST(N'2024-02-29' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (32, 3, CAST(N'2024-02-29' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (33, 4, CAST(N'2024-02-29' AS Date), 3, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (34, 2, CAST(N'2024-03-14' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (35, 3, CAST(N'2024-03-14' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (36, 4, CAST(N'2024-03-14' AS Date), 5, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (37, 2, CAST(N'2024-03-15' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (38, 3, CAST(N'2024-03-15' AS Date), 9, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (39, 4, CAST(N'2024-03-15' AS Date), 8, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (40, 2, CAST(N'2024-11-07' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (41, 3, CAST(N'2024-11-07' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (42, 2, CAST(N'2024-11-08' AS Date), 24, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (43, 3, CAST(N'2024-11-08' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (44, 4, CAST(N'2024-11-08' AS Date), 2, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (45, 2, CAST(N'2024-11-09' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (46, 3, CAST(N'2024-11-09' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (47, 4, CAST(N'2024-11-09' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1040, 2, CAST(N'2024-12-29' AS Date), 23, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1041, 3, CAST(N'2024-12-29' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1042, 4, CAST(N'2024-12-29' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1043, 2, CAST(N'2024-12-28' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1044, 3, CAST(N'2024-12-28' AS Date), 3, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1045, 4, CAST(N'2024-12-28' AS Date), 14, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1046, 2, CAST(N'2024-12-18' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1047, 3, CAST(N'2024-12-18' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1048, 4, CAST(N'2024-12-18' AS Date), 4, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1049, 2, CAST(N'2024-12-19' AS Date), 3, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1050, 3, CAST(N'2024-12-19' AS Date), 34, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1051, 4, CAST(N'2024-12-19' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1052, 2, CAST(N'2024-12-30' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1053, 3, CAST(N'2024-12-30' AS Date), 24, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1054, 4, CAST(N'2024-12-30' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1055, 2, CAST(N'2024-12-17' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1056, 3, CAST(N'2024-12-17' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1057, 2, CAST(N'2024-12-31' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1058, 3, CAST(N'2024-12-31' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1059, 2, CAST(N'2024-12-27' AS Date), 23, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1060, 3, CAST(N'2024-12-27' AS Date), 4, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1061, 4, CAST(N'2024-12-27' AS Date), 6, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1062, 2, CAST(N'2025-01-26' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1063, 3, CAST(N'2025-01-26' AS Date), 33, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1064, 4, CAST(N'2025-01-26' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1065, 2, CAST(N'2024-12-26' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1066, 3, CAST(N'2024-12-26' AS Date), 13, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1067, 4, CAST(N'2024-12-26' AS Date), 3, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1068, 3, CAST(N'2025-01-11' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1069, 2, CAST(N'2025-01-11' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1070, 4, CAST(N'2025-01-11' AS Date), 11, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1071, 2, CAST(N'2025-01-27' AS Date), 240, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1072, 2, CAST(N'2025-01-28' AS Date), 33, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1073, 3, CAST(N'2025-01-28' AS Date), 31, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1074, 4, CAST(N'2025-01-28' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1075, 2, CAST(N'2025-01-27' AS Date), 240, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1076, 3, CAST(N'2025-01-27' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1077, 4, CAST(N'2025-01-24' AS Date), 13, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1078, 2, CAST(N'2025-01-24' AS Date), 35, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1079, 3, CAST(N'2025-01-24' AS Date), 11, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1080, 4, CAST(N'2025-01-24' AS Date), 13, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1081, 3, CAST(N'2025-02-03' AS Date), 11, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1082, 2, CAST(N'2025-02-03' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1083, 3, CAST(N'2025-02-03' AS Date), 11, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1084, 4, CAST(N'2025-02-03' AS Date), 8, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1085, 2, CAST(N'2025-02-02' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1086, 3, CAST(N'2025-02-02' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1087, 4, CAST(N'2025-02-01' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1088, 2, CAST(N'2025-01-10' AS Date), 16, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1089, 3, CAST(N'2025-01-10' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1090, 4, CAST(N'2025-01-10' AS Date), 34, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1091, 2, CAST(N'2025-02-09' AS Date), 14, 0)
GO
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1092, 3, CAST(N'2025-02-09' AS Date), 34, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1093, 4, CAST(N'2025-02-09' AS Date), 19, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1094, 2, CAST(N'2025-02-08' AS Date), 21, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1095, 3, CAST(N'2025-02-08' AS Date), 34, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1096, 4, CAST(N'2025-02-08' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1097, 2, CAST(N'2025-02-07' AS Date), 16, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1098, 3, CAST(N'2025-02-07' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1099, 4, CAST(N'2025-02-07' AS Date), 30, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1100, 2, CAST(N'2025-02-04' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1101, 3, CAST(N'2025-02-04' AS Date), 24, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1102, 2, CAST(N'2025-02-13' AS Date), 46, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1103, 3, CAST(N'2025-02-13' AS Date), 19, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1104, 4, CAST(N'2025-02-13' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1105, 2, CAST(N'2025-02-10' AS Date), 21, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1106, 2, CAST(N'2025-02-19' AS Date), 21, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1107, 3, CAST(N'2025-02-19' AS Date), 17, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1108, 4, CAST(N'2025-02-19' AS Date), 38, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1109, 2, CAST(N'2025-02-11' AS Date), 39, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1110, 3, CAST(N'2025-02-11' AS Date), 18, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1111, 2, CAST(N'2025-02-15' AS Date), 15, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1112, 3, CAST(N'2025-02-15' AS Date), 59, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1113, 4, CAST(N'2025-02-15' AS Date), 17, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1114, 2, CAST(N'2025-02-14' AS Date), 14, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1115, 3, CAST(N'2025-02-14' AS Date), 45, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (1116, 4, CAST(N'2025-02-14' AS Date), 55, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2111, 2, CAST(N'2025-02-26' AS Date), 33, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2112, 3, CAST(N'2025-02-26' AS Date), 32, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2113, 4, CAST(N'2025-02-26' AS Date), 64, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2114, 2, CAST(N'2025-02-05' AS Date), 47, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2115, 3, CAST(N'2025-02-05' AS Date), 63, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2116, 2, CAST(N'2025-02-27' AS Date), 28, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2117, 2, CAST(N'2025-03-01' AS Date), 38, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2118, 2, CAST(N'2025-03-01' AS Date), 38, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2119, 3, CAST(N'2025-03-01' AS Date), 40, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2120, 4, CAST(N'2025-03-01' AS Date), 38, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2121, 2, CAST(N'2025-03-11' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2122, 4, CAST(N'2025-03-11' AS Date), 35, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2123, 2, CAST(N'2025-03-10' AS Date), 17, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2124, 3, CAST(N'2025-03-10' AS Date), 31, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2125, 4, CAST(N'2025-03-10' AS Date), 16, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2126, 3, CAST(N'2025-02-27' AS Date), 30, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2127, 2, CAST(N'2025-03-02' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2128, 3, CAST(N'2025-03-02' AS Date), 21, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2129, 4, CAST(N'2025-03-02' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2130, 3, CAST(N'2025-03-11' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2131, 2, CAST(N'2025-03-09' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2132, 3, CAST(N'2025-03-09' AS Date), 23, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2133, 3, CAST(N'2025-03-09' AS Date), 23, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2134, 4, CAST(N'2025-03-09' AS Date), 38, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2135, 2, CAST(N'2025-03-09' AS Date), 33, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2136, 2, CAST(N'2025-03-04' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2137, 3, CAST(N'2025-03-04' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2138, 3, CAST(N'2025-03-04' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2139, 4, CAST(N'2025-03-04' AS Date), 7, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2140, 2, CAST(N'2025-02-24' AS Date), 17, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2141, 2, CAST(N'2025-02-24' AS Date), 17, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2142, 3, CAST(N'2025-02-24' AS Date), 19, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2143, 4, CAST(N'2025-02-24' AS Date), 4, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2144, 2, CAST(N'2025-03-03' AS Date), 27, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2145, 3, CAST(N'2025-03-03' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2147, 2, CAST(N'2025-03-07' AS Date), 11, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2148, 3, CAST(N'2025-03-07' AS Date), 28, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2149, 4, CAST(N'2025-03-07' AS Date), 13, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2150, 2, CAST(N'2025-02-06' AS Date), 30, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2151, 3, CAST(N'2025-02-06' AS Date), 33, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2153, 4, CAST(N'2025-03-03' AS Date), 14, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2155, 3, CAST(N'2025-02-18' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2156, 4, CAST(N'2025-02-18' AS Date), 14, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2157, 2, CAST(N'2025-02-18' AS Date), 23, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2158, 3, CAST(N'2025-02-18' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2159, 4, CAST(N'2025-02-18' AS Date), 14, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2161, 4, CAST(N'2025-02-17' AS Date), 37, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2162, 2, CAST(N'2025-02-17' AS Date), 38, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2163, 4, CAST(N'2025-02-17' AS Date), 37, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2165, 2, CAST(N'2025-03-06' AS Date), 8, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2166, 3, CAST(N'2025-03-06' AS Date), 91, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2168, 2, CAST(N'2025-03-05' AS Date), 44, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2170, 3, CAST(N'2025-03-08' AS Date), 28, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2171, 8, CAST(N'2025-03-08' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2172, 2, CAST(N'2025-03-08' AS Date), 31, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2173, 3, CAST(N'2025-03-08' AS Date), 28, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2174, 4, CAST(N'2025-03-08' AS Date), 29, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2176, 8, CAST(N'2025-03-08' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2177, 2, CAST(N'2025-03-08' AS Date), 31, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2178, 3, CAST(N'2025-03-08' AS Date), 28, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2179, 4, CAST(N'2025-03-08' AS Date), 29, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2181, 2, CAST(N'2025-03-08' AS Date), 31, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2182, 3, CAST(N'2025-03-08' AS Date), 28, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2183, 4, CAST(N'2025-03-08' AS Date), 29, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2185, 2, CAST(N'2025-03-23' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2186, 3, CAST(N'2025-03-23' AS Date), 52, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2187, 4, CAST(N'2025-03-23' AS Date), 46, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2189, 8, CAST(N'2025-03-23' AS Date), 34, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2190, 2, CAST(N'2025-04-06' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2192, 3, CAST(N'2025-04-06' AS Date), 41, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2193, 4, CAST(N'2025-04-06' AS Date), 27, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2194, 8, CAST(N'2025-04-06' AS Date), 31, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2195, 2, CAST(N'2025-05-14' AS Date), 32, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2196, 3, CAST(N'2025-05-14' AS Date), 10, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2197, 4, CAST(N'2025-05-14' AS Date), 54, 0)
GO
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2199, 8, CAST(N'2025-05-14' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2200, 4, CAST(N'2025-05-15' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2202, 2, CAST(N'2025-05-15' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2203, 3, CAST(N'2025-05-15' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2204, 4, CAST(N'2025-05-15' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2205, 8, CAST(N'2025-05-15' AS Date), 59, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2206, 4, CAST(N'2025-05-13' AS Date), 26, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2207, 8, CAST(N'2025-05-13' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2208, 2, CAST(N'2025-05-13' AS Date), 21, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2209, 3, CAST(N'2025-05-13' AS Date), 35, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2210, 4, CAST(N'2025-05-13' AS Date), 26, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2211, 8, CAST(N'2025-05-13' AS Date), 27, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2213, 3, CAST(N'2025-05-25' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2214, 4, CAST(N'2025-05-25' AS Date), 31, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2216, 8, CAST(N'2025-05-25' AS Date), 26, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2217, 3, CAST(N'2025-05-24' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2218, 4, CAST(N'2025-05-24' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2219, 5, CAST(N'2025-05-24' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2221, 8, CAST(N'2025-05-24' AS Date), 40, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2222, 2, CAST(N'2025-05-29' AS Date), 53, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2224, 8, CAST(N'2025-05-28' AS Date), 24, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2225, 2, CAST(N'2025-05-28' AS Date), 69, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2226, 3, CAST(N'2025-05-28' AS Date), 51, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2228, 8, CAST(N'2025-05-28' AS Date), 24, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2229, 3, CAST(N'2025-06-03' AS Date), 26, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2230, 4, CAST(N'2025-06-03' AS Date), 16, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2231, 5, CAST(N'2025-06-03' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2232, 6, CAST(N'2025-06-03' AS Date), 32, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2233, 8, CAST(N'2025-06-03' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2234, 3, CAST(N'2025-06-02' AS Date), 12, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2235, 4, CAST(N'2025-06-02' AS Date), 15, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2236, 6, CAST(N'2025-06-02' AS Date), 30, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (2238, 8, CAST(N'2025-06-02' AS Date), 0, 1)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3229, 2, CAST(N'2025-06-06' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3230, 3, CAST(N'2025-06-06' AS Date), 17, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3231, 4, CAST(N'2025-06-06' AS Date), 13, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3232, 5, CAST(N'2025-06-06' AS Date), 33, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3233, 6, CAST(N'2025-06-06' AS Date), 11, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3235, 8, CAST(N'2025-06-06' AS Date), 42, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3236, 3, CAST(N'2025-06-05' AS Date), 41, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3238, 2, CAST(N'2025-06-09' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3239, 3, CAST(N'2025-06-09' AS Date), 19, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3240, 4, CAST(N'2025-06-09' AS Date), 21, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3241, 2, CAST(N'2025-06-09' AS Date), 22, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3242, 3, CAST(N'2025-06-09' AS Date), 19, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3243, 4, CAST(N'2025-06-09' AS Date), 21, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3244, 6, CAST(N'2025-06-09' AS Date), 24, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3245, 2, CAST(N'2025-06-08' AS Date), 35, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3246, 6, CAST(N'2025-06-08' AS Date), 32, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3248, 3, CAST(N'2025-06-04' AS Date), 20, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3249, 4, CAST(N'2025-06-04' AS Date), 37, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3250, 5, CAST(N'2025-06-04' AS Date), 37, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3252, 8, CAST(N'2025-06-04' AS Date), 29, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3253, 3, CAST(N'2025-06-01' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3254, 4, CAST(N'2025-06-01' AS Date), 34, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3256, 8, CAST(N'2025-06-01' AS Date), 43, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3257, 2, CAST(N'2025-06-10' AS Date), 28, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3258, 3, CAST(N'2025-06-10' AS Date), 25, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3259, 5, CAST(N'2025-06-10' AS Date), 32, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3260, 6, CAST(N'2025-06-10' AS Date), 16, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3261, 8, CAST(N'2025-06-10' AS Date), 43, 0)
INSERT [dbo].[Milkings] ([Id], [CowId], [Date], [Volume], [Cancelled]) VALUES (3262, 5, CAST(N'2025-06-09' AS Date), 0, 1)
SET IDENTITY_INSERT [dbo].[Milkings] OFF
GO
SET IDENTITY_INSERT [dbo].[PenMoves] ON 

INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1, 4, CAST(N'2025-01-12' AS Date), NULL, 4)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2, 2, CAST(N'2025-01-13' AS Date), NULL, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (3, 3, CAST(N'2025-01-25' AS Date), NULL, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (4, 2, CAST(N'2025-02-15' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1004, 6, CAST(N'2025-03-01' AS Date), NULL, 4)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1005, 5, CAST(N'2025-03-02' AS Date), NULL, 4)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1006, 8, CAST(N'2025-03-07' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1007, 2, CAST(N'2025-05-29' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1008, 2, CAST(N'2025-05-29' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1009, 2, CAST(N'2025-05-29' AS Date), 2, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1010, 2, CAST(N'2025-05-31' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1011, 6, CAST(N'2025-05-31' AS Date), 4, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1012, 2, CAST(N'2025-06-05' AS Date), 2, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (1013, 2, CAST(N'2025-06-05' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2011, 4, CAST(N'2025-06-07' AS Date), 3, 4)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2012, 5, CAST(N'2025-06-07' AS Date), 3, 4)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2013, 3, CAST(N'2025-06-07' AS Date), 4, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2014, 2, CAST(N'2025-06-08' AS Date), 2, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2015, 6, CAST(N'2025-06-08' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2016, 6, CAST(N'2025-06-08' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2017, 8, CAST(N'2025-06-08' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2018, 3, CAST(N'2025-06-08' AS Date), 2, 4)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2019, 2, CAST(N'2025-06-08' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2020, 4, CAST(N'2025-06-08' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2021, 5, CAST(N'2025-06-08' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2022, 6, CAST(N'2025-06-08' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2023, 8, CAST(N'2025-06-08' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2024, 10, CAST(N'2025-06-08' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2025, 11, CAST(N'2025-06-08' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2026, 3, CAST(N'2025-06-09' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2027, 9, CAST(N'2025-06-09' AS Date), 3, 2)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2028, 2, CAST(N'2025-06-09' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2029, 2, CAST(N'2025-06-09' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2030, 2, CAST(N'2025-06-09' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2031, 2, CAST(N'2025-06-09' AS Date), 3, 5)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2032, 2, CAST(N'2025-06-09' AS Date), 5, 4)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2033, 8, CAST(N'2025-06-09' AS Date), 4, 3)
INSERT [dbo].[PenMoves] ([Id], [CowId], [Date], [SourcePenId], [DestinationPenId]) VALUES (2034, 15, CAST(N'2025-06-09' AS Date), NULL, 3)
SET IDENTITY_INSERT [dbo].[PenMoves] OFF
GO
SET IDENTITY_INSERT [dbo].[Pens] ON 

INSERT [dbo].[Pens] ([Id], [Name], [Size], [Coordinates]) VALUES (2, N'Etable', 40, N'[50.491965,4.970262],[50.492095,4.970927],[50.491513,4.971241],[50.491361,4.970587]')
INSERT [dbo].[Pens] ([Id], [Name], [Size], [Coordinates]) VALUES (3, N'Prairie centrale', 60, N'[50.491965,4.970262],[50.492095,4.970927],[50.491513,4.971241],[50.491361,4.970587]')
INSERT [dbo].[Pens] ([Id], [Name], [Size], [Coordinates]) VALUES (4, N'Prairie gauche', 65, N'[50.490848,4.970597],[50.491114,4.971761],[50.491059,4.972005],[50.490878,4.972215], [50.490508,4.970925]')
INSERT [dbo].[Pens] ([Id], [Name], [Size], [Coordinates]) VALUES (5, N'Prairie latérale', 12, N'[50.490848,4.970597],[50.491114,4.971761],[50.491059,4.972005],[50.490878,4.972215], [50.490508,4.970925]')
SET IDENTITY_INSERT [dbo].[Pens] OFF
GO
SET IDENTITY_INSERT [dbo].[Roles] ON 

INSERT [dbo].[Roles] ([Id], [Name], [Description]) VALUES (1, N'Manager', N'Manager')
INSERT [dbo].[Roles] ([Id], [Name], [Description]) VALUES (2, N'Worker', N'Worker')
SET IDENTITY_INSERT [dbo].[Roles] OFF
GO
SET IDENTITY_INSERT [dbo].[Treatments] ON 

INSERT [dbo].[Treatments] ([Id], [ConditionId], [Name], [Type], [Date], [CowId]) VALUES (2, NULL, N'Triplaction', N'Medicament', CAST(N'2025-05-26' AS Date), 2)
INSERT [dbo].[Treatments] ([Id], [ConditionId], [Name], [Type], [Date], [CowId]) VALUES (3, NULL, N'Malgo-300', N'Médicament', CAST(N'2025-05-29' AS Date), 2)
INSERT [dbo].[Treatments] ([Id], [ConditionId], [Name], [Type], [Date], [CowId]) VALUES (4, NULL, N'Stipendax', N'Pansement', CAST(N'2025-05-29' AS Date), 2)
INSERT [dbo].[Treatments] ([Id], [ConditionId], [Name], [Type], [Date], [CowId]) VALUES (5, NULL, N'palendum', N'Medicament', CAST(N'2025-06-01' AS Date), 6)
INSERT [dbo].[Treatments] ([Id], [ConditionId], [Name], [Type], [Date], [CowId]) VALUES (1006, NULL, N'Dolak', N'Medicament', CAST(N'2025-06-14' AS Date), 8)
SET IDENTITY_INSERT [dbo].[Treatments] OFF
GO
SET IDENTITY_INSERT [dbo].[Users] ON 

INSERT [dbo].[Users] ([Id], [Username], [Email], [IdAuth], [RoleId]) VALUES (1, N'Jhon', N'jhon@test.test', N'test1', 2)
INSERT [dbo].[Users] ([Id], [Username], [Email], [IdAuth], [RoleId]) VALUES (2, N'Adam', N'Adam@test.test', N'adam', 2)
INSERT [dbo].[Users] ([Id], [Username], [Email], [IdAuth], [RoleId]) VALUES (3, N'Mathilda', N'mathilda@test.test', N'mathilda', 2)
INSERT [dbo].[Users] ([Id], [Username], [Email], [IdAuth], [RoleId]) VALUES (5, N'marco', N'marco@test.test', N'auth0|6848915d3b1eca85a8083d1c', 2)
INSERT [dbo].[Users] ([Id], [Username], [Email], [IdAuth], [RoleId]) VALUES (6, N'maxou', N'max@test.test', N'auth0|684b50e13729a556ffaa1e45', 2)
INSERT [dbo].[Users] ([Id], [Username], [Email], [IdAuth], [RoleId]) VALUES (7, N'jerem', N'jerem@test.test', N'auth0|684b51c59fe791df1173fc34', 2)
SET IDENTITY_INSERT [dbo].[Users] OFF
GO
SET IDENTITY_INSERT [dbo].[Vaccinations] ON 

INSERT [dbo].[Vaccinations] ([Id], [Name], [Date], [CowId]) VALUES (8, N'zanzin', CAST(N'2025-06-09' AS Date), 6)
INSERT [dbo].[Vaccinations] ([Id], [Name], [Date], [CowId]) VALUES (9, N'Sanidel_200', CAST(N'2025-06-14' AS Date), 12)
SET IDENTITY_INSERT [dbo].[Vaccinations] OFF
GO
SET IDENTITY_INSERT [dbo].[WorkerJobs] ON 

INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (3, 2, 1)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (4, 1, 1)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (5, 3, 2)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (6, 1, 2)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (7, 2, 3)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (8, 3, 5)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (9, 1, 3)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (10, 1, 2)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1009, 1, 2)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1010, 1, 14)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1011, 2, 14)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1012, 1, 15)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1013, 2, 15)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1014, 2, 18)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1015, 1, 19)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1016, 3, 17)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1017, 2, 20)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1018, 2, 20)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1019, 1, 20)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1020, 5, 20)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1021, 3, 3)
INSERT [dbo].[WorkerJobs] ([Id], [UserId], [JobId]) VALUES (1022, 3, 20)
SET IDENTITY_INSERT [dbo].[WorkerJobs] OFF
GO
/****** Object:  Index [IX_Alerts_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Alerts_CowId] ON [dbo].[Alerts]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Alerts_PenId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Alerts_PenId] ON [dbo].[Alerts]
(
	[PenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Conditions_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Conditions_CowId] ON [dbo].[Conditions]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Cows_FatherId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Cows_FatherId] ON [dbo].[Cows]
(
	[FatherId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Cows_GroupId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Cows_GroupId] ON [dbo].[Cows]
(
	[GroupId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Cows_MotherId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Cows_MotherId] ON [dbo].[Cows]
(
	[MotherId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Cows_PenId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Cows_PenId] ON [dbo].[Cows]
(
	[PenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Gestations_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Gestations_CowId] ON [dbo].[Gestations]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_GroupMoves_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_GroupMoves_CowId] ON [dbo].[GroupMoves]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_GroupMoves_DestinationGroupId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_GroupMoves_DestinationGroupId] ON [dbo].[GroupMoves]
(
	[DestinationGroupId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_GroupMoves_SourceGroupId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_GroupMoves_SourceGroupId] ON [dbo].[GroupMoves]
(
	[SourceGroupId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Interventions_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Interventions_CowId] ON [dbo].[Interventions]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Interventions_IntervenantId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Interventions_IntervenantId] ON [dbo].[Interventions]
(
	[IntervenantId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Jobs_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Jobs_CowId] ON [dbo].[Jobs]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Jobs_PenId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Jobs_PenId] ON [dbo].[Jobs]
(
	[PenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Milkings_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Milkings_CowId] ON [dbo].[Milkings]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_MilkProductions_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_MilkProductions_CowId] ON [dbo].[MilkProductions]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_PenMoves_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_PenMoves_CowId] ON [dbo].[PenMoves]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_PenMoves_DestinationPenId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_PenMoves_DestinationPenId] ON [dbo].[PenMoves]
(
	[DestinationPenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_PenMoves_SourcePenId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_PenMoves_SourcePenId] ON [dbo].[PenMoves]
(
	[SourcePenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Treatments_ConditionId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Treatments_ConditionId] ON [dbo].[Treatments]
(
	[ConditionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Treatments_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Treatments_CowId] ON [dbo].[Treatments]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Users_RoleId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Users_RoleId] ON [dbo].[Users]
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_Vaccinations_CowId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_Vaccinations_CowId] ON [dbo].[Vaccinations]
(
	[CowId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_WorkerJobs_JobId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_WorkerJobs_JobId] ON [dbo].[WorkerJobs]
(
	[JobId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
/****** Object:  Index [IX_WorkerJobs_UserId]    Script Date: 14/06/2025 07:13:43 ******/
CREATE NONCLUSTERED INDEX [IX_WorkerJobs_UserId] ON [dbo].[WorkerJobs]
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Alerts] ADD  DEFAULT (N'') FOR [Level]
GO
ALTER TABLE [dbo].[Alerts] ADD  DEFAULT (CONVERT([bit],(0))) FOR [Done]
GO
ALTER TABLE [dbo].[Cows] ADD  DEFAULT (CONVERT([bit],(0))) FOR [MilkCow]
GO
ALTER TABLE [dbo].[Interventions] ADD  DEFAULT (N'') FOR [Type]
GO
ALTER TABLE [dbo].[Jobs] ADD  DEFAULT ('0001-01-01') FOR [Date]
GO
ALTER TABLE [dbo].[Milkings] ADD  DEFAULT (CONVERT([bit],(0))) FOR [Cancelled]
GO
ALTER TABLE [dbo].[Treatments] ADD  DEFAULT ((0)) FOR [CowId]
GO
ALTER TABLE [dbo].[Alerts]  WITH CHECK ADD  CONSTRAINT [FK_Alerts_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
GO
ALTER TABLE [dbo].[Alerts] CHECK CONSTRAINT [FK_Alerts_Cows_CowId]
GO
ALTER TABLE [dbo].[Alerts]  WITH CHECK ADD  CONSTRAINT [FK_Alerts_Pens_PenId] FOREIGN KEY([PenId])
REFERENCES [dbo].[Pens] ([Id])
GO
ALTER TABLE [dbo].[Alerts] CHECK CONSTRAINT [FK_Alerts_Pens_PenId]
GO
ALTER TABLE [dbo].[Conditions]  WITH CHECK ADD  CONSTRAINT [FK_Conditions_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Conditions] CHECK CONSTRAINT [FK_Conditions_Cows_CowId]
GO
ALTER TABLE [dbo].[Cows]  WITH CHECK ADD  CONSTRAINT [FK_Cows_Cows_FatherId] FOREIGN KEY([FatherId])
REFERENCES [dbo].[Cows] ([Id])
GO
ALTER TABLE [dbo].[Cows] CHECK CONSTRAINT [FK_Cows_Cows_FatherId]
GO
ALTER TABLE [dbo].[Cows]  WITH CHECK ADD  CONSTRAINT [FK_Cows_Cows_MotherId] FOREIGN KEY([MotherId])
REFERENCES [dbo].[Cows] ([Id])
GO
ALTER TABLE [dbo].[Cows] CHECK CONSTRAINT [FK_Cows_Cows_MotherId]
GO
ALTER TABLE [dbo].[Cows]  WITH CHECK ADD  CONSTRAINT [FK_Cows_Groups_GroupId] FOREIGN KEY([GroupId])
REFERENCES [dbo].[Groups] ([Id])
GO
ALTER TABLE [dbo].[Cows] CHECK CONSTRAINT [FK_Cows_Groups_GroupId]
GO
ALTER TABLE [dbo].[Cows]  WITH CHECK ADD  CONSTRAINT [FK_Cows_Pens_PenId] FOREIGN KEY([PenId])
REFERENCES [dbo].[Pens] ([Id])
GO
ALTER TABLE [dbo].[Cows] CHECK CONSTRAINT [FK_Cows_Pens_PenId]
GO
ALTER TABLE [dbo].[Gestations]  WITH CHECK ADD  CONSTRAINT [FK_Gestations_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Gestations] CHECK CONSTRAINT [FK_Gestations_Cows_CowId]
GO
ALTER TABLE [dbo].[GroupMoves]  WITH CHECK ADD  CONSTRAINT [FK_GroupMoves_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[GroupMoves] CHECK CONSTRAINT [FK_GroupMoves_Cows_CowId]
GO
ALTER TABLE [dbo].[GroupMoves]  WITH CHECK ADD  CONSTRAINT [FK_GroupMoves_Groups_DestinationGroupId] FOREIGN KEY([DestinationGroupId])
REFERENCES [dbo].[Groups] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[GroupMoves] CHECK CONSTRAINT [FK_GroupMoves_Groups_DestinationGroupId]
GO
ALTER TABLE [dbo].[GroupMoves]  WITH CHECK ADD  CONSTRAINT [FK_GroupMoves_Groups_SourceGroupId] FOREIGN KEY([SourceGroupId])
REFERENCES [dbo].[Groups] ([Id])
GO
ALTER TABLE [dbo].[GroupMoves] CHECK CONSTRAINT [FK_GroupMoves_Groups_SourceGroupId]
GO
ALTER TABLE [dbo].[Interventions]  WITH CHECK ADD  CONSTRAINT [FK_Interventions_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Interventions] CHECK CONSTRAINT [FK_Interventions_Cows_CowId]
GO
ALTER TABLE [dbo].[Interventions]  WITH CHECK ADD  CONSTRAINT [FK_Interventions_Intervenants_IntervenantId] FOREIGN KEY([IntervenantId])
REFERENCES [dbo].[Intervenants] ([Id])
GO
ALTER TABLE [dbo].[Interventions] CHECK CONSTRAINT [FK_Interventions_Intervenants_IntervenantId]
GO
ALTER TABLE [dbo].[Jobs]  WITH CHECK ADD  CONSTRAINT [FK_Jobs_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
GO
ALTER TABLE [dbo].[Jobs] CHECK CONSTRAINT [FK_Jobs_Cows_CowId]
GO
ALTER TABLE [dbo].[Jobs]  WITH CHECK ADD  CONSTRAINT [FK_Jobs_Pens_PenId] FOREIGN KEY([PenId])
REFERENCES [dbo].[Pens] ([Id])
GO
ALTER TABLE [dbo].[Jobs] CHECK CONSTRAINT [FK_Jobs_Pens_PenId]
GO
ALTER TABLE [dbo].[Milkings]  WITH CHECK ADD  CONSTRAINT [FK_Milkings_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Milkings] CHECK CONSTRAINT [FK_Milkings_Cows_CowId]
GO
ALTER TABLE [dbo].[MilkProductions]  WITH CHECK ADD  CONSTRAINT [FK_MilkProductions_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[MilkProductions] CHECK CONSTRAINT [FK_MilkProductions_Cows_CowId]
GO
ALTER TABLE [dbo].[PenMoves]  WITH CHECK ADD  CONSTRAINT [FK_PenMoves_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PenMoves] CHECK CONSTRAINT [FK_PenMoves_Cows_CowId]
GO
ALTER TABLE [dbo].[PenMoves]  WITH CHECK ADD  CONSTRAINT [FK_PenMoves_Pens_DestinationPenId] FOREIGN KEY([DestinationPenId])
REFERENCES [dbo].[Pens] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[PenMoves] CHECK CONSTRAINT [FK_PenMoves_Pens_DestinationPenId]
GO
ALTER TABLE [dbo].[PenMoves]  WITH CHECK ADD  CONSTRAINT [FK_PenMoves_Pens_SourcePenId] FOREIGN KEY([SourcePenId])
REFERENCES [dbo].[Pens] ([Id])
GO
ALTER TABLE [dbo].[PenMoves] CHECK CONSTRAINT [FK_PenMoves_Pens_SourcePenId]
GO
ALTER TABLE [dbo].[Treatments]  WITH CHECK ADD  CONSTRAINT [FK_Treatments_Conditions_ConditionId] FOREIGN KEY([ConditionId])
REFERENCES [dbo].[Conditions] ([Id])
GO
ALTER TABLE [dbo].[Treatments] CHECK CONSTRAINT [FK_Treatments_Conditions_ConditionId]
GO
ALTER TABLE [dbo].[Treatments]  WITH CHECK ADD  CONSTRAINT [FK_Treatments_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Treatments] CHECK CONSTRAINT [FK_Treatments_Cows_CowId]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD  CONSTRAINT [FK_Users_Roles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[Roles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Roles_RoleId]
GO
ALTER TABLE [dbo].[Vaccinations]  WITH CHECK ADD  CONSTRAINT [FK_Vaccinations_Cows_CowId] FOREIGN KEY([CowId])
REFERENCES [dbo].[Cows] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Vaccinations] CHECK CONSTRAINT [FK_Vaccinations_Cows_CowId]
GO
ALTER TABLE [dbo].[WorkerJobs]  WITH CHECK ADD  CONSTRAINT [FK_WorkerJobs_Jobs_JobId] FOREIGN KEY([JobId])
REFERENCES [dbo].[Jobs] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[WorkerJobs] CHECK CONSTRAINT [FK_WorkerJobs_Jobs_JobId]
GO
ALTER TABLE [dbo].[WorkerJobs]  WITH CHECK ADD  CONSTRAINT [FK_WorkerJobs_Users_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[Users] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[WorkerJobs] CHECK CONSTRAINT [FK_WorkerJobs_Users_UserId]
GO
USE [master]
GO
ALTER DATABASE [CattleManager] SET  READ_WRITE 
GO
