using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebApplicationBasic.Models;

namespace WebApplicationBasic.Controllers
{
    [Route("api/[controller]")]
    public class PersonController : Controller
    {
        private readonly IPersonRepository _personRepository;
        public PersonController(IPersonRepository personRepository)
        {
            _personRepository = personRepository;
        }

        [HttpGet]
        public IEnumerable<Person> GetAll()
        {
            return _personRepository.GetAll();
        }

        [HttpGet("{searchTerm}", Name = "FindPerson")]
        public IActionResult GetBySearchTerm(string searchTerm)
        {
            var item = _personRepository.FindPerson(searchTerm);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpGet("{id}", Name = "GetPerson")]
        public IActionResult GetById(long id)
        {
            var item = _personRepository.Find(id);
            if (item == null)
            {
                return NotFound();
            }
            return new ObjectResult(item);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Person person)
        {
            if (person == null)
            {
                return BadRequest();
            }

            _personRepository.Add(person);

            return CreatedAtRoute("GetPerson", new { id = person.Key }, person);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Person person)
        {
            if (person == null || person.Key != id)
            {
                return BadRequest();
            }

            var item = _personRepository.Find(id);
            if (item == null)
            {
                return NotFound();
            }

            item.Name = person.Name;
            item.Vorname = person.Vorname;
            item.Geschlecht = person.Geschlecht;
            item.Geburtsdatum = person.Geburtsdatum;
            item.eMail = person.eMail;

            _personRepository.Update(item);
           // _personRepository.SaveChanges();
            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var person = _personRepository.Find(id);
            if (person == null)
            {
                return NotFound();
            }

            _personRepository.Remove(id);
            //_context.SaveChanges();
            return new NoContentResult();
        }
    }
}
