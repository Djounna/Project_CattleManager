﻿// <auto-generated />
using System;
using CM.Backend.Persistence.EF;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace CM.Backend.Persistence.Migrations
{
    [DbContext(typeof(CMContext))]
    [Migration("20240117205500_UpdateAlertAndIntervention")]
    partial class UpdateAlertAndIntervention
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("CM.Backend.Application.Models.Users.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("CM.Backend.Domain.Alerts.Alert", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CowId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Level")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PenId")
                        .HasColumnType("int");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CowId");

                    b.HasIndex("PenId");

                    b.ToTable("Alerts");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.Gestation", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateOnly?>("CalvingDate")
                        .HasColumnType("date");

                    b.Property<int>("CowId")
                        .HasColumnType("int");

                    b.Property<DateOnly>("StartDate")
                        .HasColumnType("date");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CowId");

                    b.ToTable("Gestations");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.Intervention", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CowId")
                        .HasColumnType("int");

                    b.Property<DateOnly?>("Date")
                        .HasColumnType("date");

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("IntervenantId")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CowId");

                    b.HasIndex("IntervenantId");

                    b.ToTable("Interventions");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.MilkProduction", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("CowId")
                        .HasColumnType("int");

                    b.Property<double>("LifetimeAverage")
                        .HasColumnType("float");

                    b.Property<double>("MonthlyProduction")
                        .HasColumnType("float");

                    b.Property<double>("TotalDays")
                        .HasColumnType("float");

                    b.Property<double>("TotalQuantity")
                        .HasColumnType("float");

                    b.Property<double>("WeeklyProduction")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("CowId");

                    b.ToTable("MilkProductions");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.Milking", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateOnly>("Date")
                        .HasColumnType("date");

                    b.Property<int>("MilkProductionId")
                        .HasColumnType("int");

                    b.Property<double>("Volume")
                        .HasColumnType("float");

                    b.HasKey("Id");

                    b.HasIndex("MilkProductionId");

                    b.ToTable("Milkings");
                });

            modelBuilder.Entity("CM.Backend.Domain.Cows.Cow", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<DateOnly>("BirthDate")
                        .HasColumnType("date");

                    b.Property<int?>("GroupId")
                        .HasColumnType("int");

                    b.Property<string>("Identifier")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PenId")
                        .HasColumnType("int");

                    b.Property<string>("Race")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Sex")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.HasIndex("PenId");

                    b.ToTable("Cows");
                });

            modelBuilder.Entity("CM.Backend.Domain.Cows.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ImgLink")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("CM.Backend.Domain.Externals.Intervenant", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Coordinates")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Intervenants");
                });

            modelBuilder.Entity("CM.Backend.Domain.Infrastructures.Pen", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("Area")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Size")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.ToTable("Pens");
                });

            modelBuilder.Entity("CM.Backend.Domain.Infrastructures.Stock", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.HasKey("Id");

                    b.ToTable("Stocks");
                });

            modelBuilder.Entity("CM.Backend.Domain.Jobs.Job", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int?>("CowId")
                        .HasColumnType("int");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Length")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("PenId")
                        .HasColumnType("int");

                    b.Property<int?>("RecurringJobId")
                        .HasColumnType("int");

                    b.Property<string>("Status")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("CowId");

                    b.HasIndex("PenId");

                    b.HasIndex("RecurringJobId");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("CM.Backend.Domain.Jobs.RecurringJob", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Length")
                        .HasColumnType("int");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("RecurringJobs");
                });

            modelBuilder.Entity("CM.Backend.Domain.Jobs.WorkerJob", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<int>("JobId")
                        .HasColumnType("int");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("JobId");

                    b.HasIndex("UserId");

                    b.ToTable("WorkerJobs");
                });

            modelBuilder.Entity("CM.Backend.Domain.Users.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("IdAuth")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("RoleId")
                        .HasColumnType("int");

                    b.Property<string>("Username")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("CM.Backend.Domain.Alerts.Alert", b =>
                {
                    b.HasOne("CM.Backend.Domain.Cows.Cow", "Cow")
                        .WithMany()
                        .HasForeignKey("CowId");

                    b.HasOne("CM.Backend.Domain.Infrastructures.Pen", "Pen")
                        .WithMany()
                        .HasForeignKey("PenId");

                    b.Navigation("Cow");

                    b.Navigation("Pen");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.Gestation", b =>
                {
                    b.HasOne("CM.Backend.Domain.Cows.Cow", "Cow")
                        .WithMany("Gestations")
                        .HasForeignKey("CowId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cow");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.Intervention", b =>
                {
                    b.HasOne("CM.Backend.Domain.Cows.Cow", "Cow")
                        .WithMany("Interventions")
                        .HasForeignKey("CowId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CM.Backend.Domain.Externals.Intervenant", "Intervenant")
                        .WithMany("Interventions")
                        .HasForeignKey("IntervenantId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cow");

                    b.Navigation("Intervenant");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.MilkProduction", b =>
                {
                    b.HasOne("CM.Backend.Domain.Cows.Cow", "Cow")
                        .WithMany()
                        .HasForeignKey("CowId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cow");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.Milking", b =>
                {
                    b.HasOne("CM.Backend.Domain.CowDetails.MilkProduction", "MilkProduction")
                        .WithMany("Milkings")
                        .HasForeignKey("MilkProductionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("MilkProduction");
                });

            modelBuilder.Entity("CM.Backend.Domain.Cows.Cow", b =>
                {
                    b.HasOne("CM.Backend.Domain.Cows.Group", "Group")
                        .WithMany("Cows")
                        .HasForeignKey("GroupId");

                    b.HasOne("CM.Backend.Domain.Infrastructures.Pen", "Pen")
                        .WithMany("Cows")
                        .HasForeignKey("PenId");

                    b.Navigation("Group");

                    b.Navigation("Pen");
                });

            modelBuilder.Entity("CM.Backend.Domain.Jobs.Job", b =>
                {
                    b.HasOne("CM.Backend.Domain.Cows.Cow", "Cow")
                        .WithMany("Jobs")
                        .HasForeignKey("CowId");

                    b.HasOne("CM.Backend.Domain.Infrastructures.Pen", "Pen")
                        .WithMany("Jobs")
                        .HasForeignKey("PenId");

                    b.HasOne("CM.Backend.Domain.Jobs.RecurringJob", "RecurringJob")
                        .WithMany("Jobs")
                        .HasForeignKey("RecurringJobId");

                    b.Navigation("Cow");

                    b.Navigation("Pen");

                    b.Navigation("RecurringJob");
                });

            modelBuilder.Entity("CM.Backend.Domain.Jobs.WorkerJob", b =>
                {
                    b.HasOne("CM.Backend.Domain.Jobs.Job", "Job")
                        .WithMany("WorkerJobs")
                        .HasForeignKey("JobId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("CM.Backend.Domain.Users.User", "User")
                        .WithMany("WorkerJobs")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Job");

                    b.Navigation("User");
                });

            modelBuilder.Entity("CM.Backend.Domain.Users.User", b =>
                {
                    b.HasOne("CM.Backend.Application.Models.Users.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("CM.Backend.Application.Models.Users.Role", b =>
                {
                    b.Navigation("Users");
                });

            modelBuilder.Entity("CM.Backend.Domain.CowDetails.MilkProduction", b =>
                {
                    b.Navigation("Milkings");
                });

            modelBuilder.Entity("CM.Backend.Domain.Cows.Cow", b =>
                {
                    b.Navigation("Gestations");

                    b.Navigation("Interventions");

                    b.Navigation("Jobs");
                });

            modelBuilder.Entity("CM.Backend.Domain.Cows.Group", b =>
                {
                    b.Navigation("Cows");
                });

            modelBuilder.Entity("CM.Backend.Domain.Externals.Intervenant", b =>
                {
                    b.Navigation("Interventions");
                });

            modelBuilder.Entity("CM.Backend.Domain.Infrastructures.Pen", b =>
                {
                    b.Navigation("Cows");

                    b.Navigation("Jobs");
                });

            modelBuilder.Entity("CM.Backend.Domain.Jobs.Job", b =>
                {
                    b.Navigation("WorkerJobs");
                });

            modelBuilder.Entity("CM.Backend.Domain.Jobs.RecurringJob", b =>
                {
                    b.Navigation("Jobs");
                });

            modelBuilder.Entity("CM.Backend.Domain.Users.User", b =>
                {
                    b.Navigation("WorkerJobs");
                });
#pragma warning restore 612, 618
        }
    }
}
