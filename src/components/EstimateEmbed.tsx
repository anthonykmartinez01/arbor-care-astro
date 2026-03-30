import { useEffect } from "react";

const FORM_URL = "https://go.kailenflow.com/widget/form/XjWxHG1n0SQeIqxhg944";
const SCRIPT_URL = "https://go.kailenflow.com/js/form_embed.js";

export default function EstimateEmbed({ className }: { className?: string }) {
  useEffect(() => {
    if (!document.querySelector(`script[src="${SCRIPT_URL}"]`)) {
      const s = document.createElement("script");
      s.src = SCRIPT_URL;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <iframe
      src={FORM_URL}
      className={className}
      style={{ width: "100%", height: "100%", minHeight: 600, border: "none", borderRadius: 10 }}
      loading="lazy"
      id="inline-XjWxHG1n0SQeIqxhg944"
      data-layout='{"id":"INLINE"}'
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website Form"
      data-height="600"
      data-layout-iframe-id="inline-XjWxHG1n0SQeIqxhg944"
      data-form-id="XjWxHG1n0SQeIqxhg944"
      title="Website Form"
    />
  );
}