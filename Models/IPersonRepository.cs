using System.Collections.Generic;

namespace WebApplicationBasic.Models
{
    public interface IPersonRepository
    {
        void Add(Person person);
        IEnumerable<Person> GetAll();
        Person Find(long key);
        void Remove(long key);
        void Update(Person person);
    }
}