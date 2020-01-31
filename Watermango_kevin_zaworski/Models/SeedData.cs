using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Watermango_kevin_zaworski.Data;

namespace Watermango_kevin_zaworski.Models
{
    public class SeedData
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new PlantContext(
                serviceProvider.GetRequiredService<
                    DbContextOptions<PlantContext>>()))
            {
                // Looking for any plants.
                if (context.Plants.Any())
                {
                    return;   // DB has been seeded
                }

                // default data to seed the database with
                context.Plants.AddRange(
                    new Plant
                    {
                        Name = "Dragon Tree",
                        Water = new List<Water>
                        {
                            new Water()
                            {
                                Date = DateTime.Now,
                                Duration = 6,                           
                            }
                        }
                    },
                    new Plant
                    {
                        Name = "Raye Banana",
                        Water = new List<Water>
                        {
                            new Water()
                            {
                                Date = DateTime.Now,
                                Duration = 4,
                            }
                        }
                    },
                    new Plant
                    {
                        Name = "Cacti #1",
                        Water = new List<Water>
                        {
                            new Water()
                            {
                                Date = DateTime.Now,
                                Duration = 3,
                            }
                        }
                    },
                    new Plant
                    {
                        Name = "Cacti #2",
                        Water = new List<Water>
                        {
                            new Water()
                            {
                                Date = DateTime.Now,
                                Duration = 5,
                            }
                        }
                    },
                    new Plant
                    {
                        Name = "Pothos",
                        Water = new List<Water>
                        {
                            new Water()
                            {
                                Date = DateTime.Now,
                                Duration = 10,
                            }
                        }
                    },
                    new Plant
                    {
                        Name = "Jade",
                        Water = new List<Water>
                        {
                            new Water()
                            {
                                Date = DateTime.Now,
                                Duration = 10,
                            }
                        }
                    }
                );

                context.SaveChanges();
            }
        }

    }
}
