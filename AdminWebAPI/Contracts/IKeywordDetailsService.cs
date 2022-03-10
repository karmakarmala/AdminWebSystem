using AdminWebAPI.Models;
using System.Collections.Generic;

namespace AdminWebAPI.Contracts
{
    public interface IKeywordDetailsService
    {
        IEnumerable<KeywordDetails> GetKeywords();
        KeywordDetails GetKeyword(int keywordId);
        IEnumerable<KeywordDetails> SearchKeyword(string keyword);
        KeywordDetails CreateKeywords(KeywordDetails newItem);
        void DeleteKeyword(int keywordId);
    }
}
