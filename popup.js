const checkbox = document.getElementById('autoUnmuteCheckbox');

// Load current state from storage
chrome.storage.local.get('autoUnmute', function(result) {
    checkbox.checked = result.autoUnmute || false;
});

checkbox.addEventListener('change', function() {
    chrome.storage.local.set({'autoUnmute': checkbox.checked});
});
