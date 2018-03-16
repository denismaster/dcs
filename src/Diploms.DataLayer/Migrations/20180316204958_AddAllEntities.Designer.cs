﻿// <auto-generated />
using Diploms.DataLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace Diploms.DataLayer.Migrations
{
    [DbContext(typeof(DiplomContext))]
    [Migration("20180316204958_AddAllEntities")]
    partial class AddAllEntities
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125");

            modelBuilder.Entity("Diploms.Core.CustomStage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Accepted");

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("Description");

                    b.Property<int>("DiplomWorkId");

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Name");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("Id");

                    b.HasIndex("DiplomWorkId");

                    b.ToTable("CustomStages");
                });

            modelBuilder.Entity("Diploms.Core.Department", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<int>("InstituteId");

                    b.Property<string>("Name");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<string>("ShortName");

                    b.HasKey("Id");

                    b.HasIndex("InstituteId");

                    b.ToTable("Departments");
                });

            modelBuilder.Entity("Diploms.Core.DiplomWork", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("Description");

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Name");

                    b.Property<int>("PeriodId");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<DateTime>("StartDate");

                    b.Property<int>("TeacherId");

                    b.HasKey("Id");

                    b.HasIndex("PeriodId");

                    b.HasIndex("TeacherId");

                    b.ToTable("DiplomWorks");
                });

            modelBuilder.Entity("Diploms.Core.DiplomWorkMaterial", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AuthorId");

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<byte[]>("Data");

                    b.Property<int>("DiplomWorkId");

                    b.Property<string>("Name");

                    b.Property<int>("Rank");

                    b.Property<DateTime?>("RemoveDate");

                    b.HasKey("Id");

                    b.HasIndex("AuthorId");

                    b.HasIndex("DiplomWorkId");

                    b.ToTable("DiplomWorkMaterials");
                });

            modelBuilder.Entity("Diploms.Core.GlobalStage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Name");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("Id");

                    b.ToTable("GlobalStage");
                });

            modelBuilder.Entity("Diploms.Core.GostControlTry", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description");

                    b.Property<int>("DiplomWorkMaterialId");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<bool>("Result");

                    b.Property<string>("Сontroller");

                    b.HasKey("Id");

                    b.HasIndex("DiplomWorkMaterialId");

                    b.ToTable("GostControlTries");
                });

            modelBuilder.Entity("Diploms.Core.Group", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("Name");

                    b.Property<int>("PeriodId");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<int>("SpecialityId");

                    b.HasKey("Id");

                    b.HasIndex("PeriodId");

                    b.HasIndex("SpecialityId");

                    b.ToTable("Groups");
                });

            modelBuilder.Entity("Diploms.Core.ImplementationStage", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<bool>("Accepted");

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<int>("DiplomWorkId");

                    b.Property<int>("GlobalStageId");

                    b.Property<DateTime?>("RemoveDate");

                    b.HasKey("Id");

                    b.HasIndex("DiplomWorkId");

                    b.HasIndex("GlobalStageId");

                    b.ToTable("ImplementationStages");
                });

            modelBuilder.Entity("Diploms.Core.Institute", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("Name");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<string>("ShortName");

                    b.HasKey("Id");

                    b.ToTable("Institutes");
                });

            modelBuilder.Entity("Diploms.Core.Period", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<DateTime>("EndDate");

                    b.Property<string>("Name");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<DateTime>("StartDate");

                    b.HasKey("Id");

                    b.ToTable("Periods");
                });

            modelBuilder.Entity("Diploms.Core.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Roles");
                });

            modelBuilder.Entity("Diploms.Core.Speciality", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<int>("DepartmentId");

                    b.Property<string>("Name");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<string>("ShortName");

                    b.Property<string>("Сode");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.ToTable("Specialities");
                });

            modelBuilder.Entity("Diploms.Core.Student", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<int?>("DiplomWorkId");

                    b.Property<string>("FIO");

                    b.Property<int>("GroupId");

                    b.Property<DateTime?>("RemoveDate");

                    b.Property<int?>("TeacherId");

                    b.HasKey("Id");

                    b.HasIndex("DiplomWorkId");

                    b.HasIndex("GroupId");

                    b.HasIndex("TeacherId");

                    b.ToTable("Students");
                });

            modelBuilder.Entity("Diploms.Core.Teacher", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<int>("DepartmentId");

                    b.Property<string>("FIO");

                    b.Property<int>("MaxWorkCount");

                    b.Property<int>("PositionId");

                    b.Property<DateTime?>("RemoveDate");

                    b.HasKey("Id");

                    b.HasIndex("DepartmentId");

                    b.HasIndex("PositionId");

                    b.ToTable("Teachers");
                });

            modelBuilder.Entity("Diploms.Core.TeacherPosition", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("TeachersPositions");
                });

            modelBuilder.Entity("Diploms.Core.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime?>("ChangeDate");

                    b.Property<DateTime>("CreateDate");

                    b.Property<string>("Login");

                    b.Property<string>("PasswordHash");

                    b.Property<DateTime?>("RemoveDate");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("Diploms.Core.UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("UserRole");
                });

            modelBuilder.Entity("Diploms.Core.CustomStage", b =>
                {
                    b.HasOne("Diploms.Core.DiplomWork", "DiplomWork")
                        .WithMany("CustomStages")
                        .HasForeignKey("DiplomWorkId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.Department", b =>
                {
                    b.HasOne("Diploms.Core.Institute", "Institute")
                        .WithMany("Departments")
                        .HasForeignKey("InstituteId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.DiplomWork", b =>
                {
                    b.HasOne("Diploms.Core.Period", "Period")
                        .WithMany("DiplomWorks")
                        .HasForeignKey("PeriodId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Diploms.Core.Teacher", "Teacher")
                        .WithMany("DiplomWorks")
                        .HasForeignKey("TeacherId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.DiplomWorkMaterial", b =>
                {
                    b.HasOne("Diploms.Core.Student", "Author")
                        .WithMany()
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Diploms.Core.DiplomWork", "DiplomWork")
                        .WithMany("DiplomWorkMaterials")
                        .HasForeignKey("DiplomWorkId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.GostControlTry", b =>
                {
                    b.HasOne("Diploms.Core.DiplomWorkMaterial", "DiplomWorkMaterial")
                        .WithMany("GostControlTries")
                        .HasForeignKey("DiplomWorkMaterialId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.Group", b =>
                {
                    b.HasOne("Diploms.Core.Period", "Period")
                        .WithMany()
                        .HasForeignKey("PeriodId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Diploms.Core.Speciality", "Speciality")
                        .WithMany()
                        .HasForeignKey("SpecialityId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.ImplementationStage", b =>
                {
                    b.HasOne("Diploms.Core.DiplomWork", "DiplomWork")
                        .WithMany("ImplementationStages")
                        .HasForeignKey("DiplomWorkId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Diploms.Core.GlobalStage", "GlobalStage")
                        .WithMany("Stages")
                        .HasForeignKey("GlobalStageId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.Speciality", b =>
                {
                    b.HasOne("Diploms.Core.Department", "Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.Student", b =>
                {
                    b.HasOne("Diploms.Core.DiplomWork", "DiplomWork")
                        .WithMany("Students")
                        .HasForeignKey("DiplomWorkId");

                    b.HasOne("Diploms.Core.Group", "Group")
                        .WithMany("Students")
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Diploms.Core.Teacher", "Teacher")
                        .WithMany("Students")
                        .HasForeignKey("TeacherId");
                });

            modelBuilder.Entity("Diploms.Core.Teacher", b =>
                {
                    b.HasOne("Diploms.Core.Department", "Department")
                        .WithMany()
                        .HasForeignKey("DepartmentId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Diploms.Core.TeacherPosition", "Position")
                        .WithMany()
                        .HasForeignKey("PositionId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Diploms.Core.UserRole", b =>
                {
                    b.HasOne("Diploms.Core.Role", "Role")
                        .WithMany("Users")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Diploms.Core.User", "User")
                        .WithMany("Roles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
