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
    public class WatersController : ControllerBase
    {
        private readonly PlantContext _context;

        public WatersController(PlantContext context)
        {
            _context = context;
        }

        // POST: api/Waters
        [HttpPost]
        public async Task<ActionResult<Water>> PostWater(Water water)
        {
            // using system settings for the date
            water.Date = DateTime.Now;


            _context.Water.Add(water);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (WaterExists(water.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetWater", new { id = water.Id }, water);
        }

        private bool WaterExists(int id)
        {
            return _context.Water.Any(e => e.Id == id);
        }
    }
}
