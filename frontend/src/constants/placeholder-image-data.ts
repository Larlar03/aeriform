const placeholderImageData =
    'data:image/png;base64,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';

export default placeholderImageData;