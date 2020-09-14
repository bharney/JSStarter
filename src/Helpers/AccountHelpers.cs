using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using StarterKit.Controllers;

namespace JSStarter.Helpers
{
    public class AccountHelpers : ControllerBase, IAccountHelpers
    {
        public void AddErrors(IdentityResult result)
        {
            foreach (var error in result.Errors)
            {
                ModelState.AddModelError(string.Empty, error.Description);
            }
        }
        public IActionResult RedirectToLocal(string returnUrl)
        {
            if (Url.IsLocalUrl(returnUrl))
            {
                return Redirect(returnUrl);
            }
            else
            {
                return RedirectToAction(nameof(HomeController.Index), "Home");
            }
        }
    }
}