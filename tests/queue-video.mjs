// Native scroll storytelling supersedes the archived MP4 presentation.
import {chromium,expect} from '@playwright/test';
const b=await chromium.launch({channel:'msedge',headless:true});const p=await b.newPage();await p.goto((process.env.QUEUE_URL||'http://localhost:5210')+'/work/queue');await expect(p.locator('video')).toHaveCount(0);await expect(p.locator('.qx-journey-scene')).toHaveCount(5);console.log('No video players; five native illustrated journey scenes.');await b.close();
