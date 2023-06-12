import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonal.css'



function Testimonial() {
  return (
    <>
    <h1 style={{textAlign:"center"}}>Testimonials</h1>

    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={6100}
  >
    <div style={{margin:"30px auto"}}>
      <img src="data:image/jpeg;base64,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" />
      <div className="myCarousel">
        <h3>Shirley Fultz</h3>
        <h4>Designer</h4>
        <p>
          It's freeing to be able to catch up on customized news and not be
          distracted by a social media element on the same site
        </p>
      </div>
    </div>

    <div>
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAwQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABgcDBAUBCAL/xABFEAABAwIDBAYFCQUHBQAAAAABAAIDBBEFEiEGEzFBByJRYXGBFEKRscEyM3JzdJKhsvA0NYLC0RUjJDZSorMIFkRi8f/EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBQb/xAAsEQACAQIFAQcEAwAAAAAAAAAAAQIDEQQSITFBMgUiM2FxgfATQsHRUaGx/9oADAMBAAIRAxEAPwC7URFk1CIiAIiIZCPIawucQABckr1QrpH2qiwmhdh0DN9U1DcsgDi3dMIOt+3sGiAie3PSfVvlkw/ZuMNhcd0atzbl557ux07NfYqtFYIX7yR7pJHC1nPBN/D9FaU9WWvLGF12uPHS36+Kw7t5ZIAAeqXfS1t8UBvxVrmZnTPgdc2DGxXyjtXRNdQy0LoJi6KJ9s3DNp3AW8lxZHMcy7RwdbXsX4mia6nDm6uz2PggJnsptFNQvkiwrEn0bXuBIcMoeB2jUA+FlatB0oYJPIIKlk8MoIDixudtz2c7eS+dHwCCVv8Ad7wht7XNj42XUp6ySgoI5KIxNcb52EHXlxvflb2ID6qoq6lro95STslbzynUeI5LYXzHsfthieHYm6tpH2LNZoASWSMvqLEnyIIse4r6NwLFYMawqnxCmuGTNuWk3LTzCA3kXq8QBERDAREQBERAEREAREQBERAEREMguDWlziAALknkF8ubVbTyYrtHiFTCRunyuyA6XaCQD42t7F9J7RSiDZ/E5bE5KWQ6cfklfJkYYSGfLFg4EDh3arAOnT4QcXqwadxJeQHd1wNFPsL6Lpmxsc+pBIHBwvx4rP0ZbPZYTWS26xu0X4WVpxAZQBpooXNt2RZhTSjdldO6JKZ/XjqjG42u3LcXWCTolmjDxDVxvaRoHaK1Yzoslwtk2atIoPEOjvFoGytdE4ubrG9ut/H9c1FavAcSpWkV8T4YwLZywmwHOy+pXEEahcnFsPiqojmaCbW4LDk0ZjTjI+bIxTUVNvITm6vWeRa/cBxVsdCOJVcmI4hRXkNG6Bs7WuHzZuAO7UX9g71A+kXADhFe2qELXRSOylgFtVOug3EHOr8QoSGlj6aOYOaeBDiCPY4exSRlmVyKcXCVi4F4vSvFsaBERDAREQBERAEREAREQBERAEREBEelaq9G2ExIZ8pnDIfEOcMw+7mXzzhlI+oqYzcEZh6vG/C/er56Yqd9ZssIIHN3rZmy7t3rht7gd+oVJbJ1NLFjcEuISObBGSXtDCcp7T7R7AtZPTQ3jHVXLt2TohQ0LWH/AE/ipLCNPcoxBj2FQUrZvTqd8fLJK3VYJNvKOGUiKMSRgcWyNd7iq0E7luTS2JqGEr2xCjOE7dYbiBsQ+EjiXNu0fxDRSSGohqGB8T2uaeBBuCpbESdw42CwPJJW11OZ0WKd8LGXc8DxKw0bppEI6R8KZieztYDYSMG8a7ssbrkf9P8Ahe6GKVzzdzcsLSeRIDj8FLMekhqsMrI4ZGSAwvaQDwNiub0DRtdsdNWW61RVuv8AwgD+qzS5I62tmWOV4vSvFMQBERDAREQBERAEREAREQBERAEREBC+kShFU2CWR2WKON9yVV3RrRNnrKmoqG55GM3bA7kHanRXjtFC2ag/vACwOs6/YRb+irPZaCGlrq3c8HVRaDbkNFVqPK35l6lacY+RyMY2RpqLH6Kso6Vkckj33YPkucGEjTgOBOi3Adq/Rd9TStfI2Sxpg4C7LcQSQLqfTYa2viheHNZPFK2WNzmZhpcEEdhBI81+xhYab+gHNfXcTAg/eyrEVJoPKm+CA10OIwSxuromTSSMbmfGy4aey/C97frRYKKq2ipMVpoMAnaRK1xliqYy9jALG9hqPlDgQDdWLJTxQtvLh1Qb8nOjP85WTZrC2wT1NfPAyGpqSBkab7uMcG35k8SfLWwW6vc1la2hXr9otqKmtr4aqqpaJlHlbeKM9YkX9a9uHYVo0+Ltq6o0eIVlRWSHSzIM7r2LtNOwdinW0GCwN2jfUy0zzTV1O1kj2MzCOVhOUloBOrXceWQdq578NhppN7SGi3wbkEoc1r7HjqdUcmmFFSW5y8Eo21e9jwCvcPSGmNzagNDdbC3C4OunepR0UzyU+GVOBNww01PhUhhbVAksqX5nZ7XHEEa2J4rm4DQ0mD55ohG+cvEoggeHGWS9w0dl3W15Kf4NQf2bhcFISHPY28jwLZ3k3c7zcSfNSU9iGqrM3CvF6V4pCIIiIYCIiAIiIAiIgCIiAIiIAiIgMdRC2eJ0T75XCxsqxigbR43XwNe5+SrcczrXdcA3005q0lXe0GSDaapjHVDgyXuJIt8FBXj3Sxh5WlY7tDLls1xXWY4W4qPQO0afW5LZOJwUzS6qmbGG6nMVHCXBYlHk2sRc0OjD7hubUrDQbQYdJWyUcFRFJJEAXta8EtvwuuVtFtPgz8GqGGYS3jOXIdbqn8LxCpop5Z6aF7i3i8NGjb6XW9nwaZo7Mv2srKeseYIpQZGWcQDwX76jmdYAi3EqrOjvGqaTGK6pxV7GVUgs0gZQ4DTzKsF2IRg5WPDmkdq1ba1ZtGzVkbtC4PxGGNgGl3Gw7lIOAUf2ba6SqmnPBrco81IFNS6StWffseIiKQiCIiGAiIgCIiAIiIAiIgCIhNkARfnMuJjG1WFYSC2eo3k2fIIYes4uPAd3msxjKTskYclHdnUr66noKd9RVyCOJvEn3BVPtbjUdc+nx2juYHnLw1LLcfwuuR0pbT1NfSVBiLmsbZkTQfk3Nr+PFdXDqFn/AG3T0xDSGQNbw7GrXFwdK0XuS4SX1LtHYw3EM8MUjXAt0NweIUYxzDJNoNqH01PUPbTlgJIda3cuDTYxJg0k1DOHZGE7s5tLaqU9H2INqZ5d66Jsr3aOv1iFUUGtS25qWhloNjaaE+jyV0Je0WHpEAde/bYhSzDsHnoKU01FHhoif8oMNs3eRZcXbnD5vRRUUFQIpmm4N7X/AKqHtxHa6nDWsrqWR1w1wMWpPday3jqtTbMkSXHNkXxBxp6WhheRZhhLgb6nhzXK6PxWQx1k1Y8yaiKMH/1vcrvsFXQ4TNW4lUmepEV7gaAnkAoRU7RtwnBWGmf/AIuVxe63FguLnx7PNLZtEaTkk7l84FTGnoGZhZ8nXcugSuXs1iQxTCIKi4z5Q14HJwXUKs5cuhSzZu8eIiIAiIhgIiIAiIgCIiAJdc/FcYosJiMlbOGadVoF3O8AohW7fSPme2hpAyKNhc+WU3Nu4DS5Nhz4qanh6lTpRFOtCn1MnU88cEZkme2Ng4ucbAKJ4xt3QUjHegj0qQEjNwYLC5N+fl2KCVGIV2NTM9OqHOdM8XBPVjbfiByHH2LR3e/Jc1lmPcGsaewm5v5Lp0ezoLxGUauNk+hHY2g2txeaJsJqzFLNYCOEBuS/LvNvxUIxjE3YZEJKUNFQTuYCRfKT8p+vE9l+1dLrT41TnmZm8e0uBJ/FRjaEB7KUhpLGsMjrcQ3Nlv8ArsVivFUaLUFYgoSdSqszFI+uxShAq5pJmSVgEeYcQGkk37OsFb2GwhtLGbeqG/gohsfhjayKjDC0xQQh4a22uYk3PlpqrBhg3TMttLLzGKv9Szdz0eF6L2IPtjgfpDXSMvbQi3IqCRT1OGVAc5rg5rrB2ov4EdyuyphbIwteAQonjOzkVRvMrLtPAdhUUJ5dGSzp5tURjFNsJ6ymjic43j4O1Iv2rSptoJAY3mS5b38Atuo2QLgBFI6N3Agtvp4rPT9H8k8gzVTmt7SwaKXNAiyVLn4xDa+sr4GUsLnOaXAdUanuWi7B8stLLUyXc55MzHc7cB4KYwYLhmzlI+aKESTAX3r9ST3dijDcQp6iu3Mz7StJdc/Jkvqcp7rWt3KzhIKpVXCK+Kbp03fcsvo8x2HD31FPWSZInkXceT7fr2Kz2ua4BzSCCLgg8lQGGOe3caXMsxLvoizR+JcpVsbtTUUFOyCYvnp2yGMNLrloHZfu9y6mLwbk3OG5zcPicqyyLVRaWG4pSYmwOpJQ42BLToRcX4LeXJacXZnRTTV0eIiLACIiAIiIAiIgKKr6qWqlZJVSuklkbvXuc6/M2HsA9q/GZzcPv61RJ/tbr+JI+6ufLJ/iJB2QsH+0Lc3gLaOIepC11/pdf3EL1KjZJI4Dd2bVON2Kp54MZuwe93V9xcfJZYGhtPK4jVsLz4Zur8VqseBQtF9ZJifutA/mKyMmBpq1zToGsaPvi3uWJLRmyNGlY3+0RIdchLh32Bcueyg9JjrpSQ5jImxMt2Ne2589V2aVo9IlI0AgcfbGfiUwyJsdPWRNFm7p1vaClSzepmCsRKkrMQwwuZRwwmWnFg94dma29haxHau/gnSJi0VTusZpYp4LauiaWyN9psV7UhkbY5SwWewsmdzym9vY4Md/D3rE2niextU229jINxzHL8dPNUqmCjUumW4YmULWLMoZIMTo2VdBKJYHjQt5HsPYe5Y5oHNJDgeKheFzjZPGGVFDLmoKl9pqX1cotct8CTY9xVuMip6qFkseV8b2hzXDgQea4eJwbpPyZ2KGKz6PdESbAXOFhdbHob3NAy2Ckgo4mnqtX69Gbxsqqplh1SpekRz6R9DTjqskcLk8lDZsNbViRty1sXrDjflbv/8AvJWz0nUNEcDdJVvDJcwbDfiSqywauhr2SUsrckjT8sNuL8C5o5tOlxysPPtdmpZHGa0exycf1KUXqjLg1VUSiNtTds9JZr7es0Xfm89b+a7GHZWU9TnbxlbxPC5I+ICj7ppKbaeSLKTE2AwSluov1tb/AIea7zmEUtYCSHbprh3EPYfgupSd01/GhzK0bNM34a2aCpZPDI9ksIyOe02LgT1T4g3HmOxTrZ7bZssTG4pzdl3rRaxH+ofFVm+chkksejnxsLx2G/8AVqyQyllPLkI/u3NlGnFpNv52rNbDQqx7yNaVeVN6F9RyMkY18bg5rhcEG4K/Qcqr2Z2llwsBj3OkpWkNcwm9mngR4G48wrLgqI54o5onB0cjczXDmFw6+HlRlZ7HXo1o1VobSLwHRequShERAEREB85y/tVR9Eflatv/AMsfZ2f8LURerW/t+jz/AD7mRvzVH/H+dIP3ZWeMXvcvUR7e/wCTPHt+DLTfPVX2Y/Bfuh+bqPqj8ERaT2JI7mjUfMH6t3vWlg37pH1fxCIn3Iz9plqP2Cn+i73hXPsx/l3Dvs7PciLl9peFH1Ojg/EkdIcV+28kRcbk6T2Kv6Z/lYf9XL72quIv3xh/1bvylEXZoeFD5ycyr4svnBuVX75q/tQUgl+brfs5+CIr9LaXr+ijW49DQd+xTfQb+YrKz5up+zs/5YkRWX8/oqfP9MsHzMngz87VbmyX+WsN+pC9Rc3tLoXqdDA7s7zOC/aIuKdMIiIAiIgP/9k=" />
      <div className="myCarousel">
        <h3>Daniel Keystone</h3>
        <h4>User</h4>
        <p>
        I am 66 years old with no medical conditions that would prevent me from participating in a physical fitness program. Cristina Teixeira was my personal trainer meeting twice a week. 
         </p>
      </div>
    </div>

    <div>
      <img src="data:image/jpeg;base64,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" />
      <div className="myCarousel">
        <h3>Theo Sorel</h3>
        <h4>Designer</h4>
        <p>
          I enjoy catching up with Fetch on my laptop, or on my phone when
          I'm on the go!
        </p>
      </div>
    </div>
  </Carousel>
  </>
  )
}

export default Testimonial

