using System;
using System.Collections.Generic;
using System.Linq;

namespace WebApplicationBasic.Models
{
    public class PersonRepository : IPersonRepository
    {
        private readonly PersonContext _context;

        public PersonRepository(PersonContext context)
        {
            _context = context;

            if( _context.Personen.Count() == 0)
                Add(new Person { Name = "Hugentobler", Vorname = "Fritz", eMail = "fritz@hugentobler.com" });
        }

        public IEnumerable<Person> GetAll()
        {
            return _context.Personen.ToList();
        }

        public void Add(Person item)
        {
            _context.Personen.Add(item);
            _context.SaveChanges();
        }

        public Person Find(long key)
        {
            return _context.Personen.FirstOrDefault(t => t.Key == key);
        }

        public void Remove(long key)
        {
            var entity = _context.Personen.First(t => t.Key == key);
            _context.Personen.Remove(entity);
            _context.SaveChanges();
        }

        public void Update(Person item)
        {
            _context.Personen.Update(item);
            _context.SaveChanges();
        }
    }
}