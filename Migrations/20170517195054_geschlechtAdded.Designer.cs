using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using WebApplicationBasic.Models;

namespace AngularWebApi.Migrations
{
    [DbContext(typeof(PersonContext))]
    [Migration("20170517195054_geschlechtAdded")]
    partial class geschlechtAdded
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("WebApplicationBasic.Models.Person", b =>
                {
                    b.Property<long>("Key")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Geburtsdatum");

                    b.Property<string>("Geschlecht");

                    b.Property<string>("Name");

                    b.Property<string>("Vorname");

                    b.Property<string>("eMail");

                    b.HasKey("Key");

                    b.ToTable("Personen");
                });
        }
    }
}
