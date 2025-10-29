// ==UserScript==
// @name            Classic Google Tabs
// @namespace       classic-google-tabs
// @author          Kirills Reunovs
// @description     Brings back the "Maps" tab and removes the "AI Mode" tab in Google Search.
// @version         2025-10-29.2
// @icon            https://www.google.com/s2/favicons?sz=64&domain=google.com
// @updateURL       https://github.com/Kirlovon/classic-google-tabs/raw/main/classic-google-tabs.user.js
// @downloadURL     https://github.com/Kirlovon/classic-google-tabs/raw/main/classic-google-tabs.user.js
// @match           *://google.com/search*
// @match           *://www.google.com/search*
// @match           *://www.google.com.au/search*
// @match           *://www.google.co.uk/search*
// @match           *://www.google.ca/search*
// @match           *://www.google.nl/search*
// @match           *://www.google.be/search*
// @match           *://www.google.de/search*
// @match           *://www.google.dk/search*
// @match           *://www.google.fr/search*
// @match           *://www.google.se/search*
// @match           *://www.google.no/search*
// @match           *://www.google.fi/search*
// @match           *://www.google.lv/search*
// @match           *://www.google.lt/search*
// @match           *://www.google.ie/search*
// @match           *://www.google.pl/search*
// @match           *://www.google.ru/search*
// @match           *://www.google.tld/search*
// @run-at          document-start
// @grant           none
// ==/UserScript==

// Remove AI Mode tab
const REMOVE_AI_TAB = true;

// Add Maps tab
const ADD_MAPS_TAB = true;

// Remove Short Videos tab
const REMOVE_SHORT_VIDEOS_TAB = false;

(function () {
    'use strict';

    /**
     * Remove the "AI Mode" tab from the navigation list.
     */
    function removeAITab() {
        const excludedKeywords = ['AI Mode', 'AI', 'ИИ', 'IA', 'ШІ'];
        const listItems = document.querySelectorAll('[role="listitem"]');
        listItems.forEach(item => {
            if (excludedKeywords.some(keyword => item.textContent.includes(keyword))) {
                item.remove();
            }
        });
    }

    /**
     * Remove the "Short Videos" tab from the navigation list.
     */
    function removeShortVideosTab() {
        const excludedKeywords = ['Short videos', 'Короткие видео', 'Korte video', 'Kurze videos', 'Vidéos courtes', 'Korte video'];
        const listItems = document.querySelectorAll('[role="listitem"]');
        listItems.forEach(item => {
            if (excludedKeywords.some(keyword => item.textContent.toLowerCase().includes(keyword.toLowerCase()))) {
                item.remove();
            }
        });
    }

    /**
     * Add a "Maps" tab to the navigation list.
     */
    function addMapsTab() {
        const combobox = document.querySelector('[role="combobox"]');
        const query = combobox ? encodeURIComponent(combobox.value) : '';

        const list = document.querySelector('[role="list"]');
        const firstListItem = document.querySelector('[role="listitem"]');
        
        // Check if Maps tab already exists
        const existingMapsTab = Array.from(document.querySelectorAll('[role="listitem"]')).find(item => {
            const link = item.querySelector('a');
            return (link && link.href.includes('google.com/maps')) || item.textContent.includes('Maps');
        });
        
        if (list && firstListItem && query && !existingMapsTab) {
            const mapsTab = firstListItem.cloneNode(true); 
            
            // Remove selected/active state from cloned tab
            mapsTab.querySelectorAll('[selected]').forEach(el => {
                el.removeAttribute('selected');
            });
            
            // Update the link to Google Maps
            const link = mapsTab.querySelector('a');
            if (link) link.href = `https://www.google.com/maps?q=${query}`;
            
            // Update the text to "Maps"
            const textElements = mapsTab.querySelectorAll('span');
            textElements.forEach(el => {
                if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
                    const text = el.textContent.trim();
                    if (text && text !== '' && !text.includes('http')) {
                        el.textContent = 'Maps';
                    }
                }
            });
            
            // Insert Maps tab at the desired position
            const tabIndex = REMOVE_AI_TAB ? 2 : 3;
            if (list.children.length >= tabIndex) {
                list.insertBefore(mapsTab, list.children[tabIndex]);
            } else {
                list.appendChild(mapsTab);
            }
        }
    }

    /**
     * Rework navigation tabs.
     */
    function reworkNavigation() {
        if (REMOVE_AI_TAB) removeAITab();
        if (ADD_MAPS_TAB) addMapsTab();
        if (REMOVE_SHORT_VIDEOS_TAB) removeShortVideosTab();
    }

    // Observe changes in the navigation area to reapply modifications
    const observer = new MutationObserver(() => reworkNavigation());
    const startObserving = () => {
        const navigation = document.querySelector('[role="navigation"]');
        if (!navigation) setTimeout(startObserving, 50); // Retry if navigation not found yet

        observer.observe(navigation, {
            childList: true,
            subtree: true
        });
    };

    reworkNavigation(); // Initial run
    startObserving(); // Watch for changes
})();