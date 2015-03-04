using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(FormsBuilder.Startup))]
namespace FormsBuilder
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
