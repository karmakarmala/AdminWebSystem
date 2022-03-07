using System;
using System.ComponentModel.DataAnnotations;

namespace AdminWebAPI.Models
{
    public class PromoDocuments
    {

        [Key]
        public int PromoID { get; set; }
        public string PromoName { get; set; }
    }
}
