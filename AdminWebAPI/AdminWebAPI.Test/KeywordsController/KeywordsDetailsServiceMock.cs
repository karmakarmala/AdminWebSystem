using System;
using System.Collections.Generic;
using System.Linq;
using AdminWebAPI.Controllers;
using AdminWebAPI.Models;
using AdminWebAPI.Data;

namespace AdminWebAPI.Test
{
    public class KeywordsDetailsServiceMock
    {
        private readonly List<KeywordDetails> _keywordDetails;


        public KeywordsDetailsServiceMock()
        {
            /*
            _keywordDetails = new List<KeywordDetails>()
            {
                new KeywordDetails()
                {
                    KeywordID = 1,
                    Keyword = "Desktop",
                    PromoDocDesc = "Promo 1"
                },
                new KeywordDetails()
                {
                    KeywordID = 2,
                    Keyword = "Laptop",
                    PromoDocDesc = "Promo 2"
                },
                new KeywordDetails()
                {
                    KeywordID = 3,
                    Keyword = "Docking Station",
                    PromoDocDesc = "Promo 3"
                }
            };
            */
        }

        public IEnumerable<KeywordDetails> GetKeywords()
        {
            return _keywordDetails;
        }


        public KeywordDetails GetKeyword(int KeywordID)
        {
            return _keywordDetails.Where(x => x.KeywordID == KeywordID)
                .FirstOrDefault();
        }


        public IEnumerable<KeywordDetails> SearchKeyword(string Keyword)
        {

            return _keywordDetails.Where(x => x.Keyword == Keyword).ToList();
        }


        public KeywordDetails CreateKeywords(KeywordDetails newItem)
        {

            newItem.KeywordID = 1 + newItem.KeywordID;
            _keywordDetails.Add(newItem);
            return newItem;
        }

        public void DeleteKeyword(int KeywordID)
        {
            var existing = _keywordDetails.First(x => x.KeywordID == KeywordID);
            _keywordDetails.Remove(existing);
        }
    }

}
