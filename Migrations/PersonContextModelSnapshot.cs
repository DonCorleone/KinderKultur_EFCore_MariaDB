using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using WebApplicationBasic.Models;

namespace AngularWebApi.Migrations
{
    [DbContext(typeof(PersonContext))]
    partial class PersonContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1");

            modelBuilder.Entity("WebApplicationBasic.Models.Person", b =>
                {
                    b.Property<long>("Key")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Geburtsdatum");

                    b.Property<string>("Name");

                    b.Property<string>("Vorname");

                    b.Property<string>("eMail");

                    b.HasKey("Key");

                    b.ToTable("Personen");
                });
        }
    }
}
