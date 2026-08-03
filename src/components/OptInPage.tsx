/**
 * Public opt-in workflow page, served at /opt-in.
 * Purpose: a single publicly reachable URL that "tells the story of the opt-in"
 * for toll-free / TCR messaging verification (the Opt-In Workflow field).
 * It states the business, how consent is collected, the exact consent language,
 * and a sample message, so a reviewer can see the full opt-in without clicking
 * through the multi-step funnel.
 */
export function OptInPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-4 py-10">
        <a href="/" className="text-sm text-blue-600 hover:underline">
          &larr; Back
        </a>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">SMS Opt-In Workflow</h1>
        <p className="mt-2 text-sm text-gray-600">
          This page documents how consumers opt in to receive calls and text
          messages through <strong>dklaw.mvacompensation.com</strong>, operated by
          GTM Partner LLC.
        </p>

        <div className="mt-8 space-y-6 text-sm leading-relaxed text-gray-700">
          <section>
            <h2 className="mb-1 text-base font-bold text-gray-900">Business</h2>
            <p>
              GTM Partner LLC, a Delaware limited liability company, 8 The Green,
              Dover, DE 19901. GTM Partner LLC operates a marketing and intake
              service that connects accident victims with participating law firms.
            </p>
          </section>

          <section>
            <h2 className="mb-1 text-base font-bold text-gray-900">How consumers opt in</h2>
            <ol className="list-decimal space-y-1 pl-5">
              <li>A consumer visits dklaw.mvacompensation.com and completes the accident intake form.</li>
              <li>On the contact step, the consumer enters their name and mobile phone number.</li>
              <li>
                Directly above the submit button, the consent disclosure below is
                displayed. By submitting the form, the consumer provides express
                written consent. Consent is not a condition of any purchase or service.
              </li>
              <li>Opt-in type: web form (single opt-in via form submission).</li>
            </ol>
          </section>

          <section>
            <h2 className="mb-1 text-base font-bold text-gray-900">Exact consent language shown at opt-in</h2>
            <blockquote className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800">
              By submitting my phone number, I authorize GTM Partner LLC and its
              service providers to contact me by phone call and text message (SMS),
              including via automated technology, at the number provided. Consent is
              not a condition of purchase or services. Message frequency varies.
              Message &amp; data rates may apply. Reply STOP to unsubscribe, HELP for
              help. See our{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
              {" and "}
              <a href="/terms" className="text-blue-600 hover:underline">Terms of Service</a>.
            </blockquote>
          </section>

          <section>
            <h2 className="mb-1 text-base font-bold text-gray-900">Sample message</h2>
            <blockquote className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-gray-800">
              GTM Partner LLC: Hi [Name], thanks for submitting your accident claim
              on dklaw.mvacompensation.com. A representative will reach out to
              connect you with a participating attorney. Reply STOP to opt out, HELP
              for help. Msg &amp; data rates may apply.
            </blockquote>
          </section>

          <section>
            <h2 className="mb-1 text-base font-bold text-gray-900">Opt-out and help</h2>
            <p>
              Consumers can opt out at any time by replying STOP, and can reply HELP
              for assistance. Opt-in data and consent are never shared with third
              parties for marketing or promotional purposes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
