import { NextResponse } from "next/dist/server/web/spec-extension/response"

export default (req ) => {
    return NextResponse.json({  
        message: `Hello, from ${req.url} I'm an Edge Function!`
    })
}

export const config = {
    runtime: 'experimental-edge'
}
