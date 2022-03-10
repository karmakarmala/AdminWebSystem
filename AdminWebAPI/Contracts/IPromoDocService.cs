using AdminWebAPI.Models;
using System.Collections.Generic;


namespace AdminWebAPI.Contracts
{
    public interface IPromoDocService
    {
        IEnumerable<PromoDocuments> GetPromos();
    }
}
