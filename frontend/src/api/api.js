const BASE_URL = import.meta.env.VITE_BASE_URL + "/api";

//-------------------------API CALLS------------------//

//-------------------------Signup API------------------//
export const signUpUser = async ({ firstname, lastname, email, password, cnfmPassword }) => {
    const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstname, lastname, email, password, cnfmPassword }),
    });
    const data = await response.json();
    return { response, data };
}


//-------------------------Login API------------------//
export const loginUser = async (email, password) => {
    const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return { response, data };
};

//-------------------------Request Callback API------------------//
export const requestCallback = async ({ firstName, lastName, email, phone, whatsapp, city, experience, concerns, month, region, specialProgram, treks, call, slots }) => {
    const response = await fetch(`${BASE_URL}/auth/requestCallback`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, phone, whatsapp, city, experience, concerns, month, region, specialProgram, treks, call, slots }),
    });
    const data = await response.json();
    return { response, data };
};

//----------------------Booking API Create-----------------------//
export const createBooking = async ({ userEmail, trekName, trekDate, participants, baseCost, additionalItems, totalCost, isPaymentCompleted }) => {
    console.log("Calling API...");
    const response = await fetch(`${BASE_URL}/auth/booking`, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json",
        },
        body: JSON.stringify({ userEmail, trekName, trekDate, participants, baseCost, additionalItems, totalCost, isPaymentCompleted }),
    });
    const data = await response.json();
    console.log("API Response:", data);
    return { response, data };
};

//--------------------Update booking Status API----------------//
export const updateBooking = async (bookingId, updateData) => {
    console.log(`Patch req: ${JSON.stringify(updateData)}`)
    const response = await fetch(`${BASE_URL}/auth/booking/${bookingId}`, {
        method: "PATCH",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
    });
    const data = await response.json();
    return { response, data };
};

//--------------------Review APIs----------------//
export const fetchReviews = async () => {
    try {
        const response = await fetch(`${BASE_URL}/reviews`);
        const data = await response.json();
        return { response, data };
    } catch (error) {
        console.error("fetchReviews error:", error);
        return { response: { ok: false }, data: null };
    }
};

export const submitReview = async ({ name, location, rating, expedition, text }) => {
    try {
        const response = await fetch(`${BASE_URL}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, location, rating, expedition, text }),
        });
        const data = await response.json();
        return { response, data };
    } catch (error) {
        console.error("submitReview error:", error);
        return { response: { ok: false }, data: null };
    }
};

export const markReviewHelpful = async (reviewId) => {
    try {
        const response = await fetch(`${BASE_URL}/reviews/${reviewId}/helpful`, {
            method: "POST",
        });
        const data = await response.json();
        return { response, data };
    } catch (error) {
        console.error("markReviewHelpful error:", error);
        return { response: { ok: false }, data: null };
    }
};