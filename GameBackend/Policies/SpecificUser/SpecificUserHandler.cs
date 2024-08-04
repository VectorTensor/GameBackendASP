using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.TagHelpers.Cache;

namespace GameBackend.Policies.SpecificUser;

public class SpecificUserHandler: AuthorizationHandler<SpecificUserRequirement>
{
 
    protected override Task HandleRequirementAsync(AuthorizationHandlerContext context, SpecificUserRequirement requirement)
    {
        
        if (context.User.Identity.Name =="Chad@me")
        {
            context.Succeed(requirement);

        }

        return Task.CompletedTask;
    }
}