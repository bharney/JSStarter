using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace JSStarter.Helpers
{
    public interface IAccountHelpers
    {
        void AddErrors(IdentityResult result);
        IActionResult RedirectToLocal(string returnUrl);
    }
}
