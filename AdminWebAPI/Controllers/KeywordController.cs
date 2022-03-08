using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Web.Http.Cors;
using AdminWebAPI.Data;
using AdminWebAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace AdminWebAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    [Route("api/[controller]")]
    [ApiController]
    public class KeywordController : ControllerBase
    {
        private readonly AdminSystemDbContext _db;

        public KeywordController(AdminSystemDbContext db)
        {
            _db = db;
        }

        // GET: api/Keyword/GetKeywords
        [HttpGet("GetKeyWords")]
        public IActionResult GetKeywords()
        {
            return Ok(_db.KeywordDetails.ToList());
        }

        // GET: api/Keyword/GetKeyword/5
        [HttpGet("GetKeyword/{Id}")]
        public IActionResult GetKeyword(int Id)
        {
            return Ok(_db.KeywordDetails.Where(x => x.KeywordID == Id).FirstOrDefault());
        }

        // GET: api/Keyword/Search/Keyword
        [HttpGet("Search/{Keyword}")]
        public IActionResult GetKeyword(string Keyword)
        {
            return Ok(_db.KeywordDetails.Where(x => x.Keyword == Keyword).ToList());
        }

        // POST: api/Keyword/createkeyword
        [HttpPost("CreateKeyword")]
        public IActionResult CreateKeyword(KeywordDetails kdetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _db.KeywordDetails.Add(kdetails);
            _db.SaveChanges();

            return Ok();

        }

        // PUT: api/Keyword/UpdateKeyword/5
        // [Route("api/keyword/updatekeyword/{id}")]
        [HttpPut("UpdateKeyword/{keywordId}")]
        public IActionResult UpdateKeyword(int keywordId, KeywordDetails kdetails)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            kdetails.KeywordID = keywordId;

            _db.Entry(kdetails).State = EntityState.Modified;

            try
            {
                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KeywordDetailsExists(keywordId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();

        }

        // DELETE: api/Keyword/DeleteKeyword/5
        [Route("api/keyword/deletekeyword/{keywordId}")]
        [HttpDelete("DeleteKeyword/{keywordId}")]
        public IActionResult DeleteKeyword(int keywordId)
        {

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }


            // _db.Entry(kdetails).State = EntityState.Deleted;

            try
            {
                var result = _db.KeywordDetails.FirstOrDefault(k => k.KeywordID == keywordId);

                if (result != null)
                {
                    _db.KeywordDetails.Remove(result);
                }

                _db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KeywordDetailsExists(keywordId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok();
        }



        private bool KeywordDetailsExists(int keywordId)
        {
            return _db.KeywordDetails.Count(x => x.KeywordID == keywordId) > 0;
        }

    }
}
