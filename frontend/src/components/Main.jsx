import React from 'react'

const Main = () => {
    return (
        <>
            <main className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
                <div className="card shadow w-75" style={{ maxWidth: "600px" }}>
                    <div className="card-header text-center fw-bold">
                        📈 Stock Prediction
                    </div>
                    <div className="card-body text-center">
                        <p className="text-muted">
                            Enter stock details here and view predictions.
                        </p>

                        {/* Example form (you can expand later) */}
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Enter stock symbol (e.g. AAPL)"/>
                            </div>
                            <button type="submit" className="btn btn-success">Predict</button>
                        </form>
                    </div>
                </div>
            </main>
        </>
  )
}

export default Main