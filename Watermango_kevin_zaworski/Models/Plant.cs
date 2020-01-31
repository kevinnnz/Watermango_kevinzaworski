using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Watermango_kevin_zaworski.Models
{
    public class Plant
    {
        public Plant()
        {
            this.Water = new HashSet<Water>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<Water> Water { get; set; }
    }
}
