using System;
using Microsoft.EntityFrameworkCore;
using AdminWebAPI.Models;

namespace AdminWebAPI.Data
{
    public class AdminSystemDbContext : DbContext
    {
        public AdminSystemDbContext(DbContextOptions<AdminSystemDbContext> options) : base(options)
        {

        }

        public DbSet<KeywordDetails> KeywordDetails { get; set; }
        public DbSet<PromoDocuments> PromoDocuments { get; set; }

    }
}
