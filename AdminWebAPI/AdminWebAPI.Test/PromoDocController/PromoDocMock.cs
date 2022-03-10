using System;
using System.Collections.Generic;
using System.Linq;
using AdminWebAPI.Contracts;
using AdminWebAPI.Models;

namespace AdminWebAPI.Test.PromoDocController
{
    public class PromoDocumentsMock : IPromoDocService
    {
        private readonly List<PromoDocuments> _promoDocs;
        public PromoDocumentsMock()
        {
            _promoDocs = new List<PromoDocuments>()
            {
                new PromoDocuments() { PromoID = 1,
                     PromoName="Promo 1"},
                new PromoDocuments() { PromoID = 2,
                    PromoName="Promo 2"},
                new PromoDocuments() { PromoID = 3,
                     PromoName="Promo 3" }
            };

        }

        public IEnumerable<PromoDocuments> GetPromos()
        {
            return _promoDocs;


        }
    }
}
