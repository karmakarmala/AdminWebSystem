using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Cors;
using Microsoft.EntityFrameworkCore;
using AdminWebAPI.Data;
namespace AdminWebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    [Route("api/[controller]")]
    [ApiController]
    public class PromoController : ControllerBase
    {
        private readonly AdminSystemDbContext _db;

        public PromoController(AdminSystemDbContext db)
        {
            _db = db;
        }

        // GET: api/promo/getpromos
        [HttpGet("GetPromos")]
        public IActionResult GetPromos()
        {
            return Ok(GetPromoList());
        }

        public List<string> GetPromoList()
        {
            var promos = _db.PromoDocuments;

            var promoNames = (from promo in promos
                              select new
                              {
                                  name = promo.PromoName
                              }).ToList();
            List<string> result = new List<string>();

            foreach (var promoName in promoNames)
            {
                result.Add(promoName.name);
            }
            return result;
        }
    }
}