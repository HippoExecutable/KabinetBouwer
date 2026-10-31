/*
    Parliament (parliament-seats) is a tool for visualizing and calculating
    the distribution of seats in a parliamentary system.

    Copyright (C) 2025 @disfordave

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { polls } from "@/data/polls";
import { useI18n } from "@/lib/zustandStore";
import { Preset } from "@/types";

// The poll with the latest date
function getMostRecentPoll() {
  return polls.reduce<Preset | null>(
    (latest, poll) =>
      !latest || poll.updateDate > latest.updateDate ? poll : latest,
    null,
  );
}

// A small tag after the name of the most recent poll, nothing for the others
export default function MostRecentTag({ preset }: { preset: Preset }) {
  const { i } = useI18n();
  if (preset.name !== getMostRecentPoll()?.name) return null;

  return (
    <span className="shrink-0 self-center rounded-full bg-zinc-700 px-1.5 py-0.5 text-[10px] leading-none font-semibold text-white dark:bg-zinc-200 dark:text-zinc-950">
      {i("body.mostRecent")}
    </span>
  );
}
