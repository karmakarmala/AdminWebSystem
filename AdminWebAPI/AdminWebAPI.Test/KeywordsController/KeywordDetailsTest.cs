using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using AdminWebAPI.Contracts;
using AdminWebAPI.Controllers;
using AdminWebAPI.Models;
using Xunit;
using AdminWebAPI.Data;

namespace AdminWebAPI.Test.KeywordsController
{
    public class KeywordDetailsTest
    {
        private readonly KeywordController _controller;
        private readonly AdminSystemDbContext _db;

        public KeywordDetailsTest(AdminSystemDbContext db)
        {
            _db = db;
            _controller = new KeywordController(_db);
        }


        [Fact]
        public void GetKeywords_ReturnsOkResult()
        {
            // Act
            var okResult = _controller.GetKeywords() as OkObjectResult;

            // Assert
            var items = Assert.IsType<List<KeywordDetails>>(okResult.Value);
            Assert.Equal(3, items.Count);
        }

        [Fact]
        public void GetKeywordById_UnknownKeywordIDPassed_ReturnsNotFoundResult()
        {
            // Act
            var notFoundResult = _controller.GetKeyword(150);

            // Assert
            Assert.IsType<NotFoundResult>(notFoundResult);
        }


        [Fact]
        public void GetKeywordById_ExistingKeywordIDPassed_ReturnsOkResult()
        {
            // Arrange
            var testKeywordID = 8;

            // Act
            var okResult = _controller.GetKeyword(testKeywordID);

            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void GetKeywordById_ExistingKeywordIDPassed_ReturnsRightItem()
        {
            // Arrange
            var testKeywordID = 3;

            // Act
            var okResult = _controller.GetKeyword(testKeywordID) as OkObjectResult;

            // Assert
            Assert.IsType<KeywordDetails>(okResult.Value);
            Assert.Equal(testKeywordID, (okResult.Value as KeywordDetails).KeywordID);
        }

        [Fact]
        public void CreateKeyword_InvalidObjectPassed_ReturnsBadRequest()
        {
            // Arrange
            var keywordMissingItem = new KeywordDetails()
            {
                PromoDocDesc = "Test Promo"
            };
            _controller.ModelState.AddModelError("Keyword", "Required");

            // Act
            var badResponse = _controller.CreateKeyword(keywordMissingItem);

            // Assert
            Assert.IsType<BadRequestObjectResult>(badResponse);
        }

        [Fact]
        public void CreateKeyword_ValidObjectPassed_ReturnsCreatedResponse()
        {
            // Arrange
            KeywordDetails testItem = new KeywordDetails()
            {
                Keyword = "Test Keyword Name",
                PromoDocDesc = "Test PromoDoc",
            };

            // Act
            var createdResponse = _controller.CreateKeyword(testItem);

            // Assert
            Assert.IsType<CreatedAtActionResult>(createdResponse);
        }

        [Fact]
        public void CreateKeyword_ValidObjectPassed_ReturnedResponseHasCreatedItem()
        {
            // Arrange
            var testItem = new KeywordDetails()
            {
                Keyword = "Test Keyword Name",
                PromoDocDesc = "Test PromoDoc",
            };

            // Act
            var createdResponse = _controller.CreateKeyword(testItem) as CreatedAtActionResult;
            var item = createdResponse.Value as KeywordDetails;

            // Assert
            Assert.IsType<KeywordDetails>(item);
            Assert.Equal("Test Keyword Name", item.PromoDocDesc);
        }


        [Fact]
        public void DeleteKeyword_NotExistingKeywordID_ReturnsNotFoundResponse()
        {
            // Arrange
            var notExistigKeywordID = 120;

            // Act
            var badResponse = _controller.DeleteKeyword(notExistigKeywordID);

            // Assert
            Assert.IsType<NotFoundResult>(badResponse);
        }

        [Fact]
        public void DeleteKeyword_ExistingKeywordID_ReturnsNoContentResult()
        {
            // Arrange
            var ExistigKeywordID = 3;

            // Act
            var noContentResponse = _controller.DeleteKeyword(ExistigKeywordID);

            // Assert
            Assert.IsType<NoContentResult>(noContentResponse);
        }

        [Fact]
        public void DeleteKeyword_ExistingKeywordIDPassed_RemovesOneItem()
        {
            // Arrange
            var existingKeywordId = 5;

            // Act
            var okResponse = _controller.DeleteKeyword(existingKeywordId);

            // Assert
            //Assert.Equal(2, _db.().Count());
        }



    }
}
