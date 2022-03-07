using System;
using System.ComponentModel.DataAnnotations;

namespace AdminWebAPI.Models
{
    public class KeywordDetails
    {
        [Key]
        public int KeywordID { get; set; }
        public string Keyword { get; set; }
        public string PromoDocDesc { get; set; }
    }
}
