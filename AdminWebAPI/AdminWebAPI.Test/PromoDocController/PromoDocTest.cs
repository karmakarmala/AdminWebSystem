using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using AdminWebAPI.Contracts;
using AdminWebAPI.Controllers;
using AdminWebAPI.Models;
using AdminWebAPI.Data;

using Xunit;

namespace AdminWebAPI.Test.PromoDocController
{
    public class PromoDocTest
    {
        private readonly PromoController _controller;
        private readonly AdminSystemDbContext _db;

        public PromoDocTest(AdminSystemDbContext db)
        {
            _db = db;
            _controller = new PromoController(_db);
        }

        [Fact]
        public void GetPromos_ReturnsOkResult()
        {
            // Act
            var okResult = _controller.GetPromos() as OkObjectResult;

            // Assert
            var items = Assert.IsType<List<PromoDocuments>>(okResult.Value);
            Assert.Equal(3, items.Count);
        }
    }
}
