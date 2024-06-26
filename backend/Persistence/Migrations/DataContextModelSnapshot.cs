﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

#nullable disable

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.4");

            modelBuilder.Entity("Domain.Character", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("Age")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Alignment")
                        .HasColumnType("TEXT");

                    b.Property<string>("Allies")
                        .HasColumnType("TEXT");

                    b.Property<string>("Armor")
                        .HasColumnType("TEXT");

                    b.Property<string>("BackStory")
                        .HasColumnType("TEXT");

                    b.Property<string>("Background")
                        .HasColumnType("TEXT");

                    b.Property<string>("Bonds")
                        .HasColumnType("TEXT");

                    b.Property<string>("CharacterClass")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CharacterName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Charisma")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Constitution")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CurrentHealth")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Dexterity")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Enemies")
                        .HasColumnType("TEXT");

                    b.Property<string>("EyeColor")
                        .HasColumnType("TEXT");

                    b.Property<string>("Faith")
                        .HasColumnType("TEXT");

                    b.Property<string>("Flaws")
                        .HasColumnType("TEXT");

                    b.Property<int>("FullHealth")
                        .HasColumnType("INTEGER");

                    b.Property<string>("HairStyle")
                        .HasColumnType("TEXT");

                    b.Property<int>("Height")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Ideals")
                        .HasColumnType("TEXT");

                    b.Property<int>("Intelligence")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Languages")
                        .HasColumnType("TEXT");

                    b.Property<int>("Level")
                        .HasColumnType("INTEGER");

                    b.Property<string>("LifeStyle")
                        .HasColumnType("TEXT");

                    b.Property<string>("Organizations")
                        .HasColumnType("TEXT");

                    b.Property<string>("PersonalityTrait")
                        .HasColumnType("TEXT");

                    b.Property<int>("ProfBonus")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Race")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Sex")
                        .HasColumnType("TEXT");

                    b.Property<string>("SkinColor")
                        .HasColumnType("TEXT");

                    b.Property<int>("Strength")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TempHealth")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Tools")
                        .HasColumnType("TEXT");

                    b.Property<int>("WalkSpeed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Weapons")
                        .HasColumnType("TEXT");

                    b.Property<int>("Weight")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Wisdom")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Characters");
                });
#pragma warning restore 612, 618
        }
    }
}
