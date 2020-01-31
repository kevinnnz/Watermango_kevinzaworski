using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Watermango_kevin_zaworski.Models
{
    public class Water
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Duration { get; set; }

        
        public int PlantId { get; set; }
        [ForeignKey("PlantId")]
        public virtual Plant Plant { get; set; }
    }
}
