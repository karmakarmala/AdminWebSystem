using System;
using System.ComponentModel.DataAnnotations;

namespace AdminWebAPI.Models
{
    public class KeywordDetails
    {
        [Key]
        public int KeywordID { get; set; }
        [Required]
        public string Keyword { get; set; }
        [Required]
        public string PromoDocDesc { get; set; }
    }
}
