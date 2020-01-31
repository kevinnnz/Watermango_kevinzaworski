using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Watermango_kevin_zaworski.Data;
using Watermango_kevin_zaworski.Models;

namespace Watermango_kevin_zaworski.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlantsController : ControllerBase
    {
        private readonly PlantContext _context;

        public PlantsController(PlantContext context)
        {
            _context = context;
        }
        
        // GET: api/Plants
        // Get all the plants and all the data related to watering
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Plant>>> GetPlants()
        {
            return await _context.Plants.Include(p => p.Water).ToListAsync();
        }

        // GET: api/Plants1/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Plant>> GetPlant(int id)
        {
            var plant = await _context.Plants.FindAsync(id);

            if (plant == null)
            {
                return NotFound();
            }

            await _context.Entry(plant).Collection(p => p.Water).LoadAsync();

            return plant;
        }

    }
}
