import React from 'react';

const Blog = () => {
    return (
        <div class="container my-4">


            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100 shadow">

                        <div class="card-body">
                            <h5 class="card-title fw-bold">what is cors?</h5>
                            <p class="card-text">
                                Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.   The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">

                        <div class="card-body">
                            <h5 class="card-title fw-bold">Why are you using firebase? What other options do you have to implement authentication?</h5>
                            <p class="card-text"> Firebase concept is simple. When you build a client-side app with JavaScript or any of its frameworks, for instance, Google Firebase can turn this into a serverless app in no time. It also removes the need to manage databases yourself, as it does that for you. Therefore, implementing Firebase means plugging a ready-made backend into your client code to make it dynamic. Ultimately, it eliminates the need to write backend code from scratch and gives you a fully functional one instead.

                                The best Firebase alternatives
                                <ul className='text-start'>
                                    <li>Kuzzle</li>
                                    <li>Pubnub</li>
                                    <li>Backendless</li>
                                    <li>Deployd</li>
                                </ul>


                            </p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">

                        <div class="card-body">
                            <h5 class="card-title fw-bold">How does the private route work?</h5>
                            <p class="card-text ">   PrivateRoute component is the blueprint for all private routes in the application. Private route work as the wall to go inside any component .If someone logged in only then he will redirects to the page where he wants to go .But without Login or users cannot access those routes .</p>
                        </div>

                    </div>
                </div>
                <div class="col">
                    <div class="card h-100 shadow">

                        <div class="card-body">
                            <h5 class="card-title fw-bold">What is node and how it works?</h5>
                            <p class="card-text ">  Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients.</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;