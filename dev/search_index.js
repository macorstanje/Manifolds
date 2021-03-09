var documenterSearchIndex = {"docs":
[{"location":"library/basics/#Various-manifolds-and-basic-functions-1","page":"Basics","title":"Various manifolds and basic functions","text":"","category":"section"},{"location":"library/basics/#","page":"Basics","title":"Basics","text":"CurrentModule = ManifoldDiffusions","category":"page"},{"location":"library/basics/#","page":"Basics","title":"Basics","text":"Manifold\nEmbeddedManifold\nTangentVector\nEllipse\nSphere\nTorus\nParaboloid\ng\nΓ","category":"page"},{"location":"library/basics/#ManifoldDiffusions.Manifold","page":"Basics","title":"ManifoldDiffusions.Manifold","text":"Manifold\n\nAbstract (super-)type under which all speficic manifolds fall\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#ManifoldDiffusions.EmbeddedManifold","page":"Basics","title":"ManifoldDiffusions.EmbeddedManifold","text":"EmbeddedManifold <: Manifold\n\nEmbeddedManifold creates a manifold mathcalM = f^-1(0) of dimension d=N-n where f should be a smooth function mathbbR^N to mathbbR^n. An EmbeddedManifold ℳ can be equipped equipped with functions f( , ℳ), P( , ℳ) and F( , ℳ). Here f is such that f(q, ℳ)=0 when qinmathcalM.\n\nP(q, ℳ) is the projection matrix mathbbR^N to T_qmathcalM given by I-n(q)n(q)^T, where n(q)=f(q)f(q).\n\nF(q, ℳ) is the transformation from local coordinates q to global coordinates in mathbbR^N.\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#ManifoldDiffusions.TangentVector","page":"Basics","title":"ManifoldDiffusions.TangentVector","text":"TangentVector{T, TM}\n\nElements of T_xmathcalM and equipped with vector space operations.\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#ManifoldDiffusions.Ellipse","page":"Basics","title":"ManifoldDiffusions.Ellipse","text":"Ellipse{T<:Real} <: EmbeddedManifold\n\nSettings for an ellipse as subset of mathbbR^2. Elements satisfy (xa)^2 + (yb)^2 = 1.\n\nFor an object 𝔼 = Ellipse(a, b), one has\n\nf(q mathcal𝔼) = left(fracq_1aright)^2 + left(fracq_2bright)^2 - 1\nF(q 𝔼) = beginpmatrix acos q  b sin qendpmatrix\n\nExample: Generate a unit circle\n\njulia> 𝔼 = Ellipse(1.0, 1.0)\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#ManifoldDiffusions.Sphere","page":"Basics","title":"ManifoldDiffusions.Sphere","text":"Sphere{T<:Real} <: EmbeddedManifold\n\nSettings for the sphere mathbbS^2. Call Sphere(R) to generate a sphere with radius R<:Real. Elements satisfy x^2+y^2+z^2=R^2. The local coordinates are modelled via a stereograpgical projection.\n\nFor a Sphere 𝕊 = Sphere(R), one has\n\nf(q 𝕊) = q_1^2+q_2^2-R^2\nF(q 𝕊) = beginpmatrix frac2q_1q_1^2+q_2^2+1  frac2q_2q_1^2+q_2^2+1  fracq_1^2+q_2^2-1q_1^2+q_2^2+1 endpmatrix\n\nExample: Generate a unit sphere\n\njulia> 𝕊 = Sphere(1.0)\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#ManifoldDiffusions.Torus","page":"Basics","title":"ManifoldDiffusions.Torus","text":"Torus{T<:Real} <: EmbeddedManifold\n\nSettings for the torus mathbbT^2 with inner radius r and outer radius R. Call Torus(R,r) to generate a torus with inner radius r<:Real and outer radius R<:Real. Elements satisfy (x^2+y^2+z^2+R^2-r^2)^2=4R^2(x^2+y^2).\n\nFor a Torus 𝕋 = Torus(R, r), one has\n\nf(q 𝕋) = (q_1^2+q_2^2+q_3^2+R^2-r^2)^2-4R^2(q_1^2+q_2^2)\nF(q 𝕋) = beginpmatrix (R+rcos q_1)cos q_2  (R+rcos q_1)sin q_2  rsin q_1 endpmatrix\n\nExample: Generate a torus with R=3 and r=1\n\njulia> 𝕋 = Torus(3.0, 1.0)\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#ManifoldDiffusions.Paraboloid","page":"Basics","title":"ManifoldDiffusions.Paraboloid","text":"Paraboloid{T<:Real} <: EmbeddedManifold\n\nSettings for the Paraboloid. Call Paraboloid(a,b) to generate a paraboloid with parameters a<:Real and outer radius b<:Real. Elements satisfy (xa)^2+(yb)^2 = z.\n\nFor a paraboloid ℙ = Paraboloid(a, b), one has\n\nf(q ℙ) = left(fracq_1aright)^2 + left(fracq_2bright)^2-q_3\nF(q ℙ) = beginpmatrix q_1  q_2  left(fracq_1aright)^2 + left(fracq_2bright)^2 endpmatrix\n\nExample: Generate a torus with a=0 and b=1\n\njulia> ℙ = Parabolod(3.0, 1.0)\n\n\n\n\n\n","category":"type"},{"location":"library/basics/#ManifoldDiffusions.g","page":"Basics","title":"ManifoldDiffusions.g","text":"g(q::T, ℳ::TM) where {T<:Union{AbstractArray, Real}, TM<:EmbeddedManifold}\n\nIf ℳ<:EmbeddedManifold is given in local coordinates FmathbbR^d to mathbbR^N , we obtain a Riemannian metric. g(q, ℳ) returns the matrix mathrmdF^TmathrmdF, where mathrmdF denotes the Jacobian matrix for F in q<:Union{AbstractArray, Real}.\n\n\n\n\n\ng(X::TangentFrame, Y::TangentFrame)\n\nAdds a Riemannian structure to the Frame bundle by introducing a cometric\n\n\n\n\n\n","category":"function"},{"location":"library/basics/#ManifoldDiffusions.Γ","page":"Basics","title":"ManifoldDiffusions.Γ","text":"Γ(q::T, ℳ::TM) where {T<:Union{AbstractArray, Real}, TM<:EmbeddedManifold}\n\nIf ℳ<:EmbeddedManifold is given in local coordinates FmathbbR^d to mathbbR^N , we obtain Christoffel symbols Γ^i_jk for the Levi-Civita connection.\n\nIn local coordinates q, Γ(q, ℳ) returns a matrix of size dtimes dtimes d where the element [i,j,k] corresponds to Γ^i_jk.\n\n\n\n\n\n","category":"function"},{"location":"manual/#Manual-1","page":"Manual","title":"Manual","text":"","category":"section"},{"location":"manual/#","page":"Manual","title":"Manual","text":"To do ...","category":"page"},{"location":"library/frames/#Frames-and-the-Frame-bundle-1","page":"Frames and the frame bundle","title":"Frames and the Frame bundle","text":"","category":"section"},{"location":"library/frames/#","page":"Frames and the frame bundle","title":"Frames and the frame bundle","text":"CurrentModule = ManifoldDiffusions","category":"page"},{"location":"library/frames/#","page":"Frames and the frame bundle","title":"Frames and the frame bundle","text":"Frame\nTangentFrame\nΠ\nΠˣ\nHor","category":"page"},{"location":"library/frames/#ManifoldDiffusions.Frame","page":"Frames and the frame bundle","title":"ManifoldDiffusions.Frame","text":"Frame{Tx, Tν, TM}\n\nElements of mathrmF(mathcalM) consist of a position x::Tx on ℳ<:EmbeddedManifold and a mathrmGL(d mathbbR)-matrix ν::Tν that consists of column vectors that form a basis for T_xℳ. All input is assumed to be in local coordinates that coincide with F( ,ℳ).\n\nExample: A frame on the south pole on the sphere\n\njulia> 𝕊 = Sphere(1.0)\njulia> u = Frame([0. , 0.], [1. 0. ; 0.  1.], 𝕊)\njulia> u.x # returns [0. , 0.]\njulia> u.ν # returns [1. 0. ; 0. 1.]\n\n\n\n\n\n","category":"type"},{"location":"library/frames/#ManifoldDiffusions.TangentFrame","page":"Frames and the frame bundle","title":"ManifoldDiffusions.TangentFrame","text":"TangentFrame{Tx, Tν}\n\nA tangent vector (dotx dotnu) in T_umathrmF(mathcalM). This object consists of the frame u::Frame that it is tangent to and the velocities ẋ and ν̇.\n\nExample:\n\njulia> 𝕊 = Sphere(1.0)\njulia> u = Frame([0. , 0.], [1. 0. ; 0.  1.], 𝕊)\njulia> V = TangentFrame(u, [1. 0.] , [-0.1 0. ; -0.5 1.])\n\n\n\n\n\n","category":"type"},{"location":"library/frames/#ManifoldDiffusions.Π","page":"Frames and the frame bundle","title":"ManifoldDiffusions.Π","text":"Π(u::Frame)\n\nCanonical projection Π mathrmF(mathcalM) to mathcalM that maps (xnu) to x.\n\n\n\n\n\n","category":"function"},{"location":"library/frames/#ManifoldDiffusions.Πˣ","page":"Frames and the frame bundle","title":"ManifoldDiffusions.Πˣ","text":"Πˣ(X::TangentFrame)\n\nPushforward map of the canonocal projection Π^* TmathrmF(mathcalM) to TmathcalM that maps (dotx dotnu) to dotx\n\n\n\n\n\n","category":"function"},{"location":"library/frames/#ManifoldDiffusions.Hor","page":"Frames and the frame bundle","title":"ManifoldDiffusions.Hor","text":"Hor(i::Int64, u::Frame, ℳ::TM) where {TM<:EmbeddedManifold}\n\nReturns the horizontal vector H_i(u) in T_umathrmF(mathcalM) as an element of type TangentFrame.\n\n\n\n\n\n","category":"function"},{"location":"library/frames/#","page":"Frames and the frame bundle","title":"Frames and the frame bundle","text":"FrameBundle\nHamiltonian\nStochasticDevelopment!","category":"page"},{"location":"library/frames/#ManifoldDiffusions.FrameBundle","page":"Frames and the frame bundle","title":"ManifoldDiffusions.FrameBundle","text":"FrameBundle\n\nThe object FrameBundle(ℳ) represents the frame bundle over a manifold mathcalM.\n\n\n\n\n\n","category":"type"},{"location":"library/frames/#ManifoldDiffusions.Hamiltonian","page":"Frames and the frame bundle","title":"ManifoldDiffusions.Hamiltonian","text":"Hamiltonian(x::Tx, p::Tp, ℳ::TM) where {Tx, Tp <: Union{AbstractArray, Real}, TM <: EmbeddedManifold}\n\nReturns the Hamiltonian induced by the Riemannian metric for a tangent vector p to ℳ at x\n\n\n\n\n\nHamiltonian(u::Frame, p::TangentFrame, Fℳ::FrameBundle{TM})\n\nReturns the Hamiltonian that results from the cometric g.\n\n\n\n\n\nHamiltonian(x::Tx, p::Tp, Fℳ::FrameBundle{TM})\n\nDifferent representation of the Hamiltonian as functions of two vectors of size d+d^2\n\n\n\n\n\n","category":"function"},{"location":"library/frames/#ManifoldDiffusions.StochasticDevelopment!","page":"Frames and the frame bundle","title":"ManifoldDiffusions.StochasticDevelopment!","text":"StochasticDevelopment!(Y, W, u₀, ℳ; drift)\n\nSimulate the process U_t_t on mathrmF(mathcalM) starting at u₀ that solves the SDE mathrmdU_t = V^*(U_t)mathrmdt+H(U_t) circ mathrmdW_t This function writes the process in Fℳ in place of Y\n\n\n\n\n\n","category":"function"},{"location":"library/library/#Library-1","page":"Library","title":"Library","text":"","category":"section"},{"location":"library/library/#","page":"Library","title":"Library","text":"pending","category":"page"},{"location":"#Documentation-for-Manifolds.jl-1","page":"Home","title":"Documentation for Manifolds.jl","text":"","category":"section"},{"location":"#Summary-1","page":"Home","title":"Summary","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"This repository contains various functionalities for doing analysis on manifold-valued diffusion processes.","category":"page"},{"location":"#Features-1","page":"Home","title":"Features","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"Functionalities for the following submanifolds of mathbbR^3 are implemented","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Sphere\nTorus\nParaboloid","category":"page"},{"location":"#","page":"Home","title":"Home","text":"The functionalities in this repositiory can be used to construct Brownian motion, possibly with drift, on the frame bundle of these manifolds through the Eels-Elworthy-Malliavin construction. ","category":"page"},{"location":"library/geodesics/#Geodesics-1","page":"Geodesics","title":"Geodesics","text":"","category":"section"},{"location":"library/geodesics/#","page":"Geodesics","title":"Geodesics","text":"CurrentModule = ManifoldDiffusions","category":"page"},{"location":"library/geodesics/#","page":"Geodesics","title":"Geodesics","text":"A geodesic gammaItomathcalM with gamma_0=xinmathcalM and dotγ_0=vin T_xmathcalM is modelled as a solution to the Hamiltonian system","category":"page"},{"location":"library/geodesics/#","page":"Geodesics","title":"Geodesics","text":"mathrmdx = nabla_p H(x p)mathrmdt","category":"page"},{"location":"library/geodesics/#","page":"Geodesics","title":"Geodesics","text":"mathrmdp = -nabla_x H(xp)mathrmdt","category":"page"},{"location":"library/geodesics/#","page":"Geodesics","title":"Geodesics","text":"Geodesic\nExponentialMap\nParallelTransport","category":"page"},{"location":"library/geodesics/#ManifoldDiffusions.Geodesic","page":"Geodesics","title":"ManifoldDiffusions.Geodesic","text":"Geodesic(x₀::Tx, v₀::Tv, tt, ℳ::TM) where {Tx, Tv <: AbstractArray, TM<:EmbeddedManifold}\n\nReturns the values of the geodesic on ℳ starting at x₀ with initial velicity v₀ on a discretized time interval tt. All input is in local coordinates.\n\n\n\n\n\nGeodesic(u₀::Frame, v₀::TangentFrame, tt, Fℳ::FrameBundle{TM})\n\nReturns a geodesic on Fℳ starting at u₀ with initial velocity v₀ and evaluated at a discretized time interval tt.\n\n\n\n\n\n","category":"function"},{"location":"library/geodesics/#ManifoldDiffusions.ExponentialMap","page":"Geodesics","title":"ManifoldDiffusions.ExponentialMap","text":"ExponentialMap(x₀::Tx, v₀::Tv, ℳ::TM) where {Tx, Tv <: AbstractArray, TM<:EmbeddedManifold}\n\nReturns as new element of ℳ that results from Exp_x_0v_0, where the point x₀ on ℳ and initial velocity v₀ are given in local coordinates.\n\n\n\n\n\nExponentialMap(u₀::Frame, v₀::TangentFrame, Fℳ::FrameBundle{TM})\n\nThe exponential map on Fℳ starting from u₀ with initial velocity v₀.\n\n\n\n\n\n","category":"function"},{"location":"library/geodesics/#ManifoldDiffusions.ParallelTransport","page":"Geodesics","title":"ManifoldDiffusions.ParallelTransport","text":"ParallelTransport(γ, γ̇, V₀, tt, ℳ)\n\nreturns the parallel transport of an initial  vector V₀, tangent to ℳ at gamma_0, along a curve γ. It is assumed γ and γ̇ are known on a discretized time interval tt\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#Plotting-on-Manifolds-1","page":"Plots on Manifolds","title":"Plotting on Manifolds","text":"","category":"section"},{"location":"library/manifoldplots/#","page":"Plots on Manifolds","title":"Plots on Manifolds","text":"CurrentModule = ManifoldDiffusions","category":"page"},{"location":"library/manifoldplots/#","page":"Plots on Manifolds","title":"Plots on Manifolds","text":"Al plotting functions in this library make use of the graphical library plotly() from the package Plots.","category":"page"},{"location":"library/manifoldplots/#","page":"Plots on Manifolds","title":"Plots on Manifolds","text":"SpherePlot\nSphereScatterPlot\nSphereFullPlot","category":"page"},{"location":"library/manifoldplots/#ManifoldDiffusions.SpherePlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.SpherePlot","text":"SpherePlot(X::T , Y::T, Z::T, 𝕊::Sphere) where {T<:AbstractArray}\n\nPlot a function that takes values X, Y, Z on the Sphere 𝕊.\n\n\n\n\n\nSpherePlot(X::SamplePath{T}, 𝕊::Sphere) where {T}\n\nPlot a stochastic process of type SamplePath on 𝕊.\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#ManifoldDiffusions.SphereScatterPlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.SphereScatterPlot","text":"SphereScatterPlot(X::T, Y::T, Z::T, 𝕊::Sphere) where {T<:AbstractArray}\n\nMake a scatterplot of coordinates X, Y, Z on 𝕊.\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#ManifoldDiffusions.SphereFullPlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.SphereFullPlot","text":"SphereFullPlot(trace, data, target, 𝕊::Sphere; PlotUpdates = true)\n\nA plot of a trace of (for example MCMC-) updates with data and a target added. This function returns a plot on 𝕊 with a line trace, points data and a point target.\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#","page":"Plots on Manifolds","title":"Plots on Manifolds","text":"TorusPlot\nTorusScatterPlot\nTorusFullPlot","category":"page"},{"location":"library/manifoldplots/#ManifoldDiffusions.TorusPlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.TorusPlot","text":"TorusPlot(X::T , Y::T, Z::T, 𝕋::Torus) where {T<:AbstractArray}\n\nPlot a function that takes values X, Y, Z on the Torus 𝕋.\n\n\n\n\n\nTorusPlot(X::SamplePath{T}, 𝕋::Torus) where {T}\n\nPlot a stochastic process of type SamplePath on 𝕋.\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#ManifoldDiffusions.TorusScatterPlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.TorusScatterPlot","text":"TorusScatterPlot(X::T, Y::T, Z::T, 𝕋::Torus) where {T<:AbstractArray}\n\nMake a scatterplot of coordinates X, Y, Z on 𝕋.\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#ManifoldDiffusions.TorusFullPlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.TorusFullPlot","text":"TorusFullPlot(trace, data, target, 𝕋::Torus; PlotUpdates = true)\n\nA plot of a trace of (for example MCMC-) updates with data and a target added. This function returns a plot on 𝕋 with a line trace, points data and a point target.\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#","page":"Plots on Manifolds","title":"Plots on Manifolds","text":"ParaboloidPlot\nParaboloidScatterPlot\nParaboloidFullPlot","category":"page"},{"location":"library/manifoldplots/#ManifoldDiffusions.ParaboloidPlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.ParaboloidPlot","text":"ParaboloidPlot(X::T , Y::T, Z::T, ℙ::Paraboloid) where {T<:AbstractArray}\n\nPlot a function that takes values X, Y, Z on the Paraboloid ℙ.\n\n\n\n\n\nParaboloidPlot(X::SamplePath{T}, ℙ::Paraboloid) where {T}\n\nPlot a stochastic process of type SamplePath on ℙ.\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#ManifoldDiffusions.ParaboloidScatterPlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.ParaboloidScatterPlot","text":"TorusScatterPlot(X::T, Y::T, Z::T, ℙ::Paraboloid) where {T<:AbstractArray}\n\nMake a scatterplot of coordinates X, Y, Z on ℙ.\n\n\n\n\n\n","category":"function"},{"location":"library/manifoldplots/#ManifoldDiffusions.ParaboloidFullPlot","page":"Plots on Manifolds","title":"ManifoldDiffusions.ParaboloidFullPlot","text":"ParaboloidFullPlot(trace, data, target, ℙ::Paraboloid; PlotUpdates = true)\n\nA plot of a trace of (for example MCMC-) updates with data and a target added. This function returns a plot on ℙ with a line trace, points data and a point target.\n\n\n\n\n\n","category":"function"}]
}