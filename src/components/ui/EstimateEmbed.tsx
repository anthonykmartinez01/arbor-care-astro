import { useEffect } from "react";

export default function EstimateEmbed() {
  useEffect(() => {
    if (document.querySelector('script[src="https://go.kailenflow.com/js/form_embed.js"]')) return;
    const s = document.createElement("script");
    s.src = "https://go.kailenflow.com/js/form_embed.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <iframe
      src="https://go.kailenflow.com/widget/form/XjWxHG1n0SQeIqxhg944"
      style={{ width: "100%", border: "none", overflow: "hidden", minHeight: "600px" }}
      id="inline-XjWxHG1n0SQeIqxhg944"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Free Estimate"
      data-height="600"
      data-layout-iframe-id="inline-XjWxHG1n0SQeIqxhg944"
      data-form-id="XjWxHG1n0SQeIqxhg944"
      title="Free Estimate Form"
      loading="lazy"
    />
  );
}
